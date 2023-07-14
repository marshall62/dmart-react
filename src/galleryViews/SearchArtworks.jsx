import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import MyLightbox from "./MyLightbox";
import { GlobalContext } from "../App";
import { BSON } from "realm-web";


export default function SearchArtworks () {
  const [artworks, setArtworks] = useState([]);
  const global = useContext(GlobalContext);
  const {searchTerm} = useParams();
  
  useEffect(() => {
    async function getArtworks_internal () {
      let num = Number(searchTerm);
      let id;
      try {
        id = BSON.ObjectId(searchTerm)
      } catch (error) {
        id='';
      }
      const matchingWorks = await global.artworks
        .find({ $or: [{tags: {$regex: searchTerm, $options: 'i'}}, 
          {title: {$regex: searchTerm, $options: 'i'}}, 
          {media: {$regex: searchTerm, $options: 'i'}}, 
          {_id: id},
          {year: num}] });
      console.log("matching works",matchingWorks);
      setArtworks(matchingWorks);
    }
    if (global.artworks) {
      console.log("Getting artworks with", searchTerm)
      getArtworks_internal();
    }
  },[global, searchTerm]);  

  if (artworks.length > 0) 
    return (
      <MyLightbox artworks={artworks}/> 
    )
  else
      return (<div>No results found</div>)
    
}


import ImageGallery from 'react-image-gallery';
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "react-image-gallery/styles/css/image-gallery.css";
import './my-lightbox.css';
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function MyLightbox ({artworks}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const global = useContext(GlobalContext);


  const [artworkId, setArtworkId] = useState(searchParams ? 
    searchParams.get('artwork')
    : '');

  const images = global.artistConfig ? 
    artworks.map(aw => {
    return {
      original: `${global.artistConfig.imageRootURI}/midsize/${aw.imagePath}`,
      fullscreen: `${global.artistConfig.imageRootURI}/${aw.imagePath}`,
      thumbnail: `${global.artistConfig.imageRootURI}/thumb/${aw.imagePath}`,
      description: `${aw.title}, ${aw.width} X ${aw.height}, ${aw.year}, ${aw.media}`
    }
    }) :
    [];


  useEffect(() => {
    const id = searchParams.get('artwork');
    console.log("search params chg", searchParams);
    console.log("id", id);
    setArtworkId(id);
  },[searchParams] )


  const fn = (index) => {
    console.log("sliding to",artworks[index]._id.toString());
    navigate('?artwork=' + artworks[index]._id.toString() + '&index=' + index)
  }

  return(
    <>
      <ImageGallery className="image-gallery-description" onSlide={fn} showIndex={true} items={images}></ImageGallery>
    </>
  )

}


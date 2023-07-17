
import ImageGallery from 'react-image-gallery';
import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function MyLightbox ({artworks}) {
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  const global = useContext(GlobalContext);

  const [artworkId, setArtworkId] = useState(searchParams.get('artwork'));

  const images = artworks.map(aw => {
    return {
      original: `${global.artistConfig.imageRootURI}/midsize/${aw.imagePath}`,
      fullscreen: `${global.artistConfig.imageRootURI}/${aw.imagePath}`,
      thumbnail: `${global.artistConfig.imageRootURI}/thumb/${aw.imagePath}`,
      description: `${aw.title}, ${aw.width} X ${aw.height}, ${aw.year}, ${aw.media}`
    }
  });


  useEffect(() => {
    const id = searchParams.get('artwork');
    setArtworkId(id);
  },[searchParams] )

  console.log("search param",artworkId)

  const fn = (index) => {
    console.log("sliding to",artworks[index]._id.toString());
    navigate('?artwork=' + artworks[index]._id.toString() + '&index=' + index)
  }

  return(
    <>
      <ImageGallery onSlide={fn} showIndex={true} items={images}></ImageGallery>
    </>
  )

}


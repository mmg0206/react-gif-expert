import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"

const GifGrid = ({category}) => {
  const [images, setImages] = useState([]);

  const getImages = async () =>{
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(()=>{
    getImages();
  },[]);
  

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map( img=>{
          return(
            <li key={img.id}>{img.title}</li>
          )
        })}
      </ol>
    </>
  )
}

export default GifGrid

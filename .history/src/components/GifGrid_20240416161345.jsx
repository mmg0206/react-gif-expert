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

    </>
  )
}

export default GifGrid

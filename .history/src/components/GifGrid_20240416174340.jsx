import { useEffect, useState } from "react";
import GifItem from "./GifItem";
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
        {
          images.map( ({id,title})=>(
          // <li key={id}>{title}</li>
          <GifItem />
        ))
        }
      </ol>
    </>
  )
}

export default GifGrid

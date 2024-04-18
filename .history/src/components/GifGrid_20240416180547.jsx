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
      <div>
        {
          images.map( (img)=>(
          <GifItem key={img.id} {...img}/>
        ))
        }
      </div>
    </>
  )
}

export default GifGrid

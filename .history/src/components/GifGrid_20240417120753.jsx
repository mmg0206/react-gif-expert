import { useEffect, useState } from "react";
import GifItem from "./GifItem";
// import { getGifs } from "../helpers/getGifs"
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);
 

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
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

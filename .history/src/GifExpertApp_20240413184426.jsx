import { useState } from "react";

export const GifExpertApp = () => {
  // const apiKey ='Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8';
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);
  const onAddCategory =()=>{
    setCategories([...categories,'Valorant']);
  }

  
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>      

      {/* input */}

      {/* listado de gifs */}
      <button onClick={()=>onAddCategory()}>Agregar</button>
      <ol>
        {
          categories.map(el =>{
              return <li key={el}>{el}</li>
          })
        }
      </ol>
        {/* Gif item */}
    </>
  )
}


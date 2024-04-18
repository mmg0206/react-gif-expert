import { useState } from "react";

export const GifExpertApp = () => {
  // const apiKey ='Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8';
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);
  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>      

      {/* input */}

      {/* listado de gifs */}
      <ol>
        {
          categories.map((el,index) =>{
              return <li key={index}>{el}</li>
          })
        }
      </ol>
        {/* Gif item */}
    </>
  )
}


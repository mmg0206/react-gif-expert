import { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {
  // const apiKey ='Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8';
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

  const onAddCategory = (newValue)=>{
    if(categories.includes(newValue)) return;
    setCategories(categories.concat(newValue));
  }

  
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>      

      {/* input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={ event => onAddCategory(event)}
      />

      {/* listado de gifs */}
      <ol>
        {
          categories.map( category =>(<GifGrid key={category} category={category}/>))
    
            // return <li key={el}>{el}</li>
    
        }
      </ol>
        {/* Gif item */}
    </>
  )
}


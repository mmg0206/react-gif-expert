import { useState } from "react";
import {AddCategory} from "./components";
import GifGrid from "./components";

export const GifExpertApp = () => {
  // const apiKey ='Ls33XwmjLip5m9fo9lFfzjgpz7a8Isa8';
  const [categories, setCategories] = useState(['One punch']);

  const onAddCategory = (newValue)=>{
    if(categories.includes(newValue)) return;
    setCategories(categories.concat(newValue));
  }

  
  return (
    <>
      <h1>GifExpertApp</h1>      

      <AddCategory 
        onNewCategory={ event => onAddCategory(event)}
      />

      {
        categories.map( category =>(<GifGrid key={category} category={category}/>))
      }

    </>
  )
}


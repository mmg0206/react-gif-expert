// import { useState } from "react"

// export const AddCategory = () => {
//     const [inputValue, setInputValue] = useState('One push');

//     const onInputChange = (value)=>{
//         setInputValue(value)
//     }
    
//     const onSubmit = (event) =>{
//         event.preventDefault();
//         console.log(inputValue);
//     }

//     return (
//         <form onSubmit={(e)=>onSubmit(e)}>
//             <input
//                 type="text"
//                 placeholder="Buscar gifs"
//                 value={inputValue}
//                 onChange={(e)=>onInputChange(e.target.value)}
//             />
//         </form>
//     )
// }

import { useState } from "react"
 
export const AddCategory = () => {
 
const [inputValue, setInputValue] = useState('Digimon')
 
const onInputChange = ( target ) => {
    setInputValue(target.target.value);
}
 
const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(inputValue);
}
 
  return (
    <form onSubmit={ (event) => onSubmit(event)}>
 
        <input 
    type="text" 
    placeholder="Buscar GIFs"
    value={ inputValue }
    onChange={ onInputChange }
     />
 
    </form>
    
  )
}
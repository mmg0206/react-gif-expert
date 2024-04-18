import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (value)=>{
        setInputValue(value)
    }
    
    const onSubmit = (event) =>{
        console.log(event);
    }

  return (
    <form onSubmit={(e)=>onSubmit(e)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(e)=>onInputChange(e.target.value)}
        />
    </form>
  )
}


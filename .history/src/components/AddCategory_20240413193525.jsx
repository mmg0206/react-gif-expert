import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (value)=>{
        setInputValue(value)
    }
  return (
    <form>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(e)=>onInputChange(e.target.value)}
        />
    </form>
  )
}


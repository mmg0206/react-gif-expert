import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('One punch');
    const onInputChange = ()=>{
        setInputValue('Hola Mundo')
    }
  return (
    <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
    />
  )
}


import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = (value)=>{
        setInputValue(value)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue);
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


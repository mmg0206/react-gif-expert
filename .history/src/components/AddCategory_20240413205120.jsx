import { useState } from "react"

export const AddCategory = () => {
    const [inputValue, setInputValue] = useState('Onef push');

    const onInputChange = ({target})=>{
        setInputValue(target.value)
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
                onChange={(e)=>onInputChange(e)}
            />
        </form>
    )
}

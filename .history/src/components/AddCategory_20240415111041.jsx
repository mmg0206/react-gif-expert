import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('Onef push');

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }
    
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        setCategories(category => [...category,inputValue]);
        setInputValue('');
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

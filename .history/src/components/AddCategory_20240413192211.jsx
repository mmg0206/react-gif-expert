import { useState } from "react"

export const AddCategory = () => {
    const [category, setCategory] = useState('')
  return (
    <input
        type="text"
        placeholder="Buscar gifs"
    />
  )
}


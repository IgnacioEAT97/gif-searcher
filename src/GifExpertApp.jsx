import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (event) => {
    if(categories.includes(event.trim())) return;
      setCategories([...categories,event]);  
  }

  return (
    <>
   {/*  titulo */}
   
    <h1>GifExpertApp</h1>
    <AddCategory 
    /* setCategories={setCategories} */
    onNewCategory = {(event) => onAddCategory(event)}

    />
    <button onClick={onAddCategory}>Agregar</button>
    
      {categories.map((category) => 
       (<GifGrid key={category} category={category}/>)
      )}

    </>
  )
}

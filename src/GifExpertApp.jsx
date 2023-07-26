import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // Importacion a archivo de barril index.js, este nos sirve para ordenar nuestros imports, no se escribe /index ya que se toma de forma implicita



export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (event) => {
    if(categories.includes(event.trim())) return;
      setCategories([event,...categories]);  
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

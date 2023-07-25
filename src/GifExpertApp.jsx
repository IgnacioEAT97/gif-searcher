import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = () => {
    /* const anadir = setCategories(categories => categories.concat('Valorant')); */
   /*  const anadir = setCategories([...categories,'Valorant']); */
      setCategories([...categories,'Valorant']);
  }

  return (
    <>
   {/*  titulo */}
   
    <h1>GifExpertApp</h1>
    <AddCategory setCategories={setCategories}/>
    <button onClick={onAddCategory}>Agregar</button>
    <ol> {/*  Order list que crea como un listado con numeros */}
      {categories.map((index) => <li key={index}> {index} </li>)}

    </ol>
    </>
  )
}

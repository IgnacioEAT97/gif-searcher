import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => { //Esto es un hook, ya que un hook es una funcion que regresa algo
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    }
    useEffect(() => {
      getImages();
    },[])

return{
    images, // por ECMASCRIPT se puede hacer esto, ya que retornamos un obejto con el mismo nombre ejemplo: image: [image]
    isLoading
}
}

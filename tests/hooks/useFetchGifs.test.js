import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook de nuestro useFetchGifs', () => { 

    test('debe de regresar el estado incial', () => { 

       const {result} = renderHook( () => useFetchGifs('OnePunch') ); // renderizamos el hook atraves de callback de la funcion renderhook

       const{ images, isLoading} = result.current; // desestructuramos de result.current los valores iniciales de nuestro hook
       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy();
     })


     test('debe de retornar un arreglo de imagenes y isLoading  en false', async() => { 

        const {result} = renderHook( () => useFetchGifs('OnePunch') ); // renderizamos el hook atraves de callback de la funcion renderhook
 
        await waitFor( // await wait for nos permite esperar una promesa para poder evaluar la funcion despues de que llegue la promesa
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 2000
            }
        );  

        const{images, isLoading} = result.current;
        
        
        expect(images.length).not.toBe(0);
        expect(isLoading).toBeFalsy();
        
      })
 })
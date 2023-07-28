import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 
        const gifs = await(getGifs('OnePunch'));
        //console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({ //Espera que el objeto en la posicion 0 sea igual a el objeto que contiene las mismas propiedades del gif
            id: expect.any( String ), //Espera cualquier dato de tipo String
            title: expect.any( String ),
            url: expect.any( String ),
        })
    })
 })
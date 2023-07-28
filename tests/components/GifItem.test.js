import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Probando GifItem', () => { 
    const title = 'Kakaroto'
    const url = 'https://kakaroto/goku.jpg'
    test('debe generar snapshot', () => {

        const {container} = render(<GifItem title={title} url={url}></GifItem>)
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url}></GifItem>)
        /* expect(screen.getByRole('img').src).toBe(url)
        expect(screen.getByRole('img').alt).toBe(title) */
        const {src,alt} = screen.getByRole('img'); // Es mejor desestructurarlos y mas ordenado
        expect(src).toBe(url)
        expect(alt).toBe(title);
        
      })

      test('debe de mostrar el titulo en el compoentne', () => { 
        render(<GifItem title={title} url={url}></GifItem>)
        expect(screen.getByText(title)).toBeTruthy() // Busca el texto y NO EL ATRIBUTO
       })
 });
import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Probando componente GifGrid', () => { 
    const category = 'One Punch';
    test('debe de mostar el loading incialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando'));
        expect(screen.getByText(category))
     });

     test('debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs= [
            {
                id: 'Abstra',
                title: 'Satiama',
                url: 'https://localhost:ola'
            },
            {
                id: 'abcd',
                title: 'Goku',
                url: 'https://localhost/goku'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
      
      render(<GifGrid category={category}/>)
      //screen.debug()
      expect(screen.getAllByRole('img').length).toBe(2);
    })

 })
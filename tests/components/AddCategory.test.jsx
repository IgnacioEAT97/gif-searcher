import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Probando componente AddCategory', () => { 

    test('debe de cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={()  => {}}></AddCategory>) //Se crea sujeto de pruebas
        const input = screen.getByRole('textbox')//se Extrae el input 

        fireEvent.input(input,{target:{value:'Saitama'}}); //Disparamos evento
        expect(input.value).toBe('Saitama') //Acersion despues del evento
        //screen.debug()
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1); //Con esto vemos cuantas veces se llamo la funcion
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
     });

     test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>)

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);




     })
})
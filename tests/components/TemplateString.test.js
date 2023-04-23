import { GetSaludo } from '../../sources/js/components/TemplateString';

describe('Pruebas en archivo TemplateString', ()=>{
    test('GetSaludo debe retornar "Hola Jhosua"', ()=>{

        const name = 'Jhosua';
        const mesasge = GetSaludo( name );

        expect( mesasge ).toBe('Hola ' + name);

    });
});
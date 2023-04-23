import { getArr } from '../../sources/js/components/Arrays';

describe('Pruebas en Arrays', ()=>{
    test('Debe retornar un string y un número', ()=>{

        const [ letters, numbers ] = getArr();

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );


    });
});
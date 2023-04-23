import { GetObjUser, GetObjUserActive } from '../../sources/js/components/Objects';


describe('Pruebas en archivo Objects', ()=>{
    test('Verificamos que la función GetObjUser retorne un objeto', ()=>{
        const createObj = {
            id: 'abc123',
            userName: 'Jhosua',
        };

        const getObj = GetObjUser();

        expect( createObj ).toEqual( getObj );

    });

    test('Verificamos que la función GetObjUserActivo retorne un objeto', ()=>{

        const nameActive = 'Pepito';

        const createObjActive = {
            id: '123abc',
            userName: nameActive,
        };

        const getObjActive = GetObjUserActive(nameActive);

        expect( createObjActive ).toEqual( getObjActive );

    });

    test('Verificamos que al desestructurar el nombre del objeto sea "Jhosua"', ()=>{
        const name = "Jhosua";

        const { userName } = GetObjUser();

        expect( name ).toBe( userName );

    });
});
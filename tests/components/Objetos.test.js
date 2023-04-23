import { GetObjUser, GetObjUserActive } from '../../sources/js/components/Objetos';


describe('Pruebas en archivo Objetos', ()=>{
    test('Verificamos que la función GetObjUser retorne un objeto', ()=>{
        const createObj = {
            id: 'abc123',
            nombre: 'Jhosua',
        };

        const getObj = GetObjUser();

        expect( createObj ).toEqual( getObj );

    });

    test('Verificamos que la función GetObjUserActivo retorne un objeto', ()=>{

        const nameActive = 'Pepito';

        const createObjActive = {
            id: '123abc',
            nombre: nameActive,
        };

        const getObjActive = GetObjUserActive(nameActive);

        expect( createObjActive ).toEqual( getObjActive );

    });
});
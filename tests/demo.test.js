describe('Pruebas en <DemoComponent />', ()=>{
    test('esta prueba no debe fallar', ()=>{
        //1. Inialización
        const messageOne = 'Hola Mundo';
    
        //2. Estímulo
        const messageTwo = messageOne.trim();
    
        //3. Observar el comportamiento esperado
        expect( messageOne ).toBe( messageTwo );
    });
});


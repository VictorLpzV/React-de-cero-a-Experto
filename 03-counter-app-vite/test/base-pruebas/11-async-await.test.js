import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js',()=>{
    test('getImagen debe retornar un error si no tenemos Apikey',async()=>{
        const resp=await getImagen();
        //console.log(url);

        expect(resp).toBe('No se encontro la imagen');
    });
});
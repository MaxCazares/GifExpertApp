import useFetchGifs from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('HxH'));
        const {data, loading} = result.current;

        await waitForNextUpdate({ timeout: 2500 });
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });    

    test('Debe retornar un arreglo de 10 gifs y el loading en false', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('HxH'));
        await waitForNextUpdate({ timeout: 2500 });    
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

    });    

});
import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const category = 'HxH';    

    test('Comprobar que funciona correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar items cuando se cargan imagenes usando useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://youtube.com',
            title: 'Enlace a YouTube',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();       
        expect(wrapper.find('div .sk-chase').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });        



});
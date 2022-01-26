import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem'

describe('Pruebas a GifGridItem', () => {

    const title = 'Esto es un prueba';
    const url = 'https://media2.giphy.com/media/v5ftsU3bztQ6k/giphy.gif?cid=1e0449b68ets3n0kci1et6rc5xcn5sy64gd614rz34mire4u&rid=giphy.gif&ct=g';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)
    
    test('Debe mostrar el componente correctamentwe', () => {

        expect(wrapper).toMatchSnapshot();

    });    

    test('Debe mostrar un párrafo en el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });
    
    test('Debe mostrar el url y el alt en la imagen', () => {
        
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('Debe de tener la clase animate__fadeInDown', () => {
        
        const div = wrapper.find('div');
        const animation = div.prop('className').includes('animate__fadeInDown');
        expect(animation).toBe(true);

    }); 

});
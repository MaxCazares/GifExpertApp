import '@testing-library/jest-dom'

import React from 'react';
import {shallow} from 'enzyme';
import GiftExpertApp from '../GifExpertApp';

describe('Pruebas en <GiftExpertApp/>', () => {

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<GiftExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe mostrar una lista de las categorias', () => {

        const categories = ['HxH', 'DBZ'];
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    

});
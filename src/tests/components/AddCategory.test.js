import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('Debe mostrarse correctamente', () => {    

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'Naruto';
        input.simulate('change', {target: {value}});

        expect(wrapper.text().trim()).toBe(value);
    });
    
    test('No debe de postear la info', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();

    });
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'One Piece';
        
        const input = wrapper.find('input');
        input.simulate('change', {target: {value}});
        
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');

    });
    

});
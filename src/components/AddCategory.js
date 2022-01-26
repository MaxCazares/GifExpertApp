import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const cambiarValorInput = e => {
        setInputValue(e.target.value);
        console.log('handle input change llamado');
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handle submit', inputValue);

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type="text"
                value={inputValue}
                placeholder='anime, manga, Japón ...'
                onChange={cambiarValorInput}
            />
        </form>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
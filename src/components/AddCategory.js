import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    // Cada vez que cambia el valor de input
    // se modifica el valor del texto del input
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    
    }

    // Junta el valor del input con el resto de la lista
    // y deja limpio el input
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho')
        if(inputValue.trim().length > 2 ){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}





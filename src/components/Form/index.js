import './Form.css';
import React, { useState } from "react";
import { AUTHORS } from '../utils/constants';

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        onSubmit(
            value
        );
    };

    return (
        <form onSubmit={handleSubmit} >
            <input className='inputText' type="text" value={value} onChange={handleChange}></input>
            <input className='inputSubmit' type="submit"></input>
        </form>
    )
}
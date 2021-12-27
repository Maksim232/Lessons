import './Form.css';
import React, { useRef, useState, useEffect } from "react";
import { Button } from '@mui/material';


export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();
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

    useEffect(() => {
        inputRef.current?.focus();
    }, []);


    return (
        <form onSubmit={handleSubmit} >
            <input className='inputText' ref={inputRef} type="text" value={value} onChange={handleChange}></input>

            <Button className='inputSubmit' type="submit" variant="contained" color="secondary">Send</Button>
        </form >
    )
}
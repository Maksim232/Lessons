import './Form.css';
import React, { useRef, useState, useEffect } from "react";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

import { AUTHORS } from '../utils/constants';

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const inputRef = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e?.preventDefault && e.preventDefault();

        setValue("");
        onSubmit(value);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange} inputRef={inputRef} />
            <Button className='inputSubmit' type="submit" variant="contained" color="secondary">Send</Button>
        </form >
    );
};
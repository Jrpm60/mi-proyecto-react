import React, { useState } from 'react';

const Input = () => {

    const [input, setInput]= useState("");

    const handleChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange} />
            <div>{input}</div>
     
        </>
    );
};

export default Input;
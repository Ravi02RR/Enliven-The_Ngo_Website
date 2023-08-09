import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "./New.css"

const New = () => {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/', { title })
            .then(() => {
                navigate("/question");
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <h1>Post Your Question Here...</h1>
            <form onSubmit={handleSubmit} className="card">
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className="card-title"
                    placeholder="Enter title"
                />
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    )
}

export default New;

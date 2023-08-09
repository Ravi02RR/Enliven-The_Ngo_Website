import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Faq.css"
const Faqhome = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/')
            .then(response => {
                setQuestions(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div className="pageStyle">
            {questions.map(question => (
                <div key={question._id} className="cardStyle">
                    <h3 className="titleStyle">{question.title}</h3>
                    <Link to={`/view/${question._id}`} className="linkStyle">Read More...</Link>
                </div>
            ))}
            <Link to="/new" className="newQuestionStyle linkStyle">Post a Question</Link>
        </div>
    )
}

export default Faqhome
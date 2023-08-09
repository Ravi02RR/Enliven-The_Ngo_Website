import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./Reply.css"

const Reply = () => {
    const [question, setQuestion] = useState({ replies: [] });
    const [newReply, setNewReply] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/view/${id}`)
            .then(response => {
                setQuestion(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    const handleNewReplyChange = (event) => {
        setNewReply(event.target.value);
    }

    const handleReplySubmit = (event) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/view/${id}/replies`, { reply: newReply })
            .then(response => {
                setQuestion(prevQuestion => ({
                    ...prevQuestion,
                    replies: [...prevQuestion.replies, response.data]
                }));
                setNewReply("");
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <div className="card">
                <h2 className="card-title">{question.title}</h2>
                {question.replies.map(reply => (
                    <p key={reply._id} className="reply">{reply.reply}</p>
                ))}

                <form onSubmit={handleReplySubmit}>
                    <input
                        type="text"
                        value={newReply}
                        onChange={handleNewReplyChange}
                        className="card-title flex"
                        placeholder="Write a reply..."
                    />
                    <button type="submit" className="button">Submit Reply</button>
                </form>
            </div>
        </div>
    )
}

export default Reply;

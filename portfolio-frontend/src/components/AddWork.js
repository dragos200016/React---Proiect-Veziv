import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddWork.css';

function AddWork() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [clientUrl, setClientUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/works', { title, description, imageUrl, clientUrl })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error adding the work!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="add-work-form">
      <h1>Add Work</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        value={clientUrl}
        onChange={(e) => setClientUrl(e.target.value)}
        placeholder="Client URL"
        required
      />
      <button type="submit">Add Work</button>
    </form>
  );
}

export default AddWork;
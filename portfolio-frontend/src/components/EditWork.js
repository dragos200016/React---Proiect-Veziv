import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditWork.css';

function EditWork() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [clientUrl, setClientUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/works/${id}`)
      .then((response) => {
        const work = response.data;
        setTitle(work.title);
        setDescription(work.description);
        setImageUrl(work.imageUrl);
        setClientUrl(work.clientUrl);
      })
      .catch((error) => {
        console.error('There was an error fetching the work!', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/works/${id}`, { title, description, imageUrl, clientUrl })
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('There was an error updating the work!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-work-form">
      <h1>Edit Work</h1>
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
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditWork;
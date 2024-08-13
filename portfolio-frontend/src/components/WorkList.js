import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './WorkList.css';

function WorkList() {
  const [works, setWorks] = useState([]);
  const [visibleWorks, setVisibleWorks] = useState({}); 

  useEffect(() => {
    axios.get('http://localhost:3000/works')
      .then((response) => {
        setWorks(response.data);
        const initialVisibility = {};
        response.data.forEach(work => {
          initialVisibility[work.id] = true;
        });
        setVisibleWorks(initialVisibility);
      })
      .catch((error) => {
        console.error('There was an error fetching the works!', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/works/${id}`)
      .then(() => {
        setWorks(works.filter(work => work.id !== id));
      })
      .catch((error) => {
        console.error('There was an error deleting the work!', error);
      });
  };

  const toggleVisibility = (id) => {
    setVisibleWorks(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="work-list">
      <h1>Portfolio</h1>
      <Link to="/add" className="add-work-button">Add Work</Link>
      <ul>
        {works.map((work) => (
          <li key={work.id} className="work-item">
            <button onClick={() => toggleVisibility(work.id)} className="work-button">
              {visibleWorks[work.id] ? 'Hide' : 'Show'}
            </button>
            {visibleWorks[work.id] && (
              <>
                <h2>{work.title}</h2>
                <p>{work.description}</p>
                <img src={work.imageUrl} alt={work.title} />
                <div className="work-buttons">
                  <button 
                    className="work-button client-button" 
                    onClick={() => window.open(work.clientUrl, '_blank')}
                  >
                    Client Site
                  </button>
                  <Link to={`/edit/${work.id}`} className="work-button edit-button">Edit</Link>
                  <button 
                    onClick={() => handleDelete(work.id)} 
                    className="work-button delete-button"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkList;

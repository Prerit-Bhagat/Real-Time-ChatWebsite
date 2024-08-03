import React, { useState } from 'react';

const HomePage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8000/api/members/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstname, lastname }),
      });
  
      if (response.ok) {
        alert('Member added successfully!');
        setFirstname('');
        setLastname('');
        fetchMembers(); // Refresh the list after adding
      } else {
        const errorData = await response.json();
        alert('Error adding member: ' + errorData.detail || 'Unknown error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error');
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Firstname:</label>
        <br />
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <br />
        <label>Enter Lastname:</label>
        <br />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HomePage;

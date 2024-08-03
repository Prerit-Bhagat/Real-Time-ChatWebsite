import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [members, setMembers] = useState([]); // State to hold members
  const [loading, setLoading] = useState(false); // Optional: State to handle loading

  // Fetch members from the server when the component mounts
  useEffect(() => {
    fetchMembers();
  }, []);

  // Function to fetch members from the server
  const fetchMembers = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:8000/api/members/list/');
      if (response.ok) {
        const data = await response.json();
        setMembers(data); // Update the state with fetched members
      } else {
        console.error('Error fetching members:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

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
        fetchMembers(); // Fetch the updated list of members
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

      <div>
        <h2>Members List:</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {members.map((member, index) => (
              <li key={index}>{member.firstname} {member.lastname}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;

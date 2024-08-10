import React, { useState, useEffect } from 'react';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ firstname, lastname, email }),
      });

      if (response.ok) {
        alert('Member added successfully!');
        setFirstname('');
        setLastname('');
        setEmail('');
        // Optionally fetch the updated list of members
        fetchMembers();
      } else {
        const errorData = await response.json();
        alert('Error adding member: ' + errorData.detail || 'Unknown error');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error');
    }
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'firstname') {
      setFirstname(value);
    } else if (name === 'lastname') {
      setLastname(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  return (
    <div>
      <div className='container'>
        <h1>Hello {firstname} {lastname}</h1>
      </div>  
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstname" 
          value={firstname} 
          placeholder='First Name' 
          onChange={handleChange} 
          required
        />
        <input 
          type="text" 
          name="lastname" 
          value={lastname} 
          placeholder='Last Name' 
          onChange={handleChange} 
          required
        />
        <input 
          type="email" 
          name="email" 
          value={email} 
          placeholder='Email' 
          onChange={handleChange} 
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="user-list-container">
      <h1 className="user-list-heading">User List</h1>
      <div className="user-list">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">Email: {user.email}</p>
            <p className="user-phone">Phone: {user.phone}</p>
            <p className="user-website">Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
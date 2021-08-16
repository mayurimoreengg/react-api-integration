import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users?page=2'
    }).then(data => {
      setUser(data.data.data);
    });
  }, []);

  return (
    <div>
      <h1>Hello Mayuri!</h1>
      <table>
        <tr>
          <th>Email</th>
          <th>First name</th>
          <th>Last name</th>
        </tr>
        {user &&
          user.length &&
          user.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

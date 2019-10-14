import React, { useState } from 'react';
import './styles.scss';

import api from '../../services/api';

function Home({ history }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.get('/users', { user, password });

    localStorage.setItem('userInfo', response.data);

    history.push('/universes');
  }

  return (
    <>
      <h1 className="welcome">Welcome to Story Worlds</h1>
      <h6 className="welcome">Here your imagination becomes alive</h6>
      <div className="content">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="user">Username</label>
          <input type="text" value={user} id="user" placeholder="Type your username" onChange={event => setUser(event.target.value)} />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} id="password" placeholder="Type password" onChange={event => setPassword(event.target.value)} />
          <button type="submit" className="btn">Login</button>
        </form>
        <button type="button" className="btn btn-secondary">Sign in</button>
      </div>
    </>
  );
}

export default Home;

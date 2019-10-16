import React, { useState } from 'react';
import './styles.scss';

import api from '../../services/api';

function Home({ history }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [connectAttempt, setConnectAttempt] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.get(`/users?user=${user}&password=${password}`);
      setConnectAttempt(false);

      localStorage.setItem('userInfo', response.data._id);
      localStorage.setItem('universesInfo', response.data.universes);

      history.push('/universes');
    } catch (err) {
      setConnectAttempt(true);
      console.log(err);
    }

  }

  return (
    <>
      <div className="container">
        <h1 className="welcome">Welcome to Story Worlds</h1>
        <h6 className="welcome">Here your imagination becomes alive</h6>
        <div className="content">
          {connectAttempt ? <span className="warming">Invalid credentials. Please, try again.</span> : null}
          <form className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="user">Username</label>
            <input type="text" value={user} id="user" placeholder="Type your username" onChange={event => setUser(event.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" value={password} id="password" placeholder="Type password" onChange={event => setPassword(event.target.value)} />
            <button type="submit" className="btn">Sign in</button>
          </form>
          <button type="button" className="btn btn-secondary">Sign up</button>
        </div>
      </div>
    </>
  );
}

export default Home;

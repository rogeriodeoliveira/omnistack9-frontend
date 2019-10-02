import React, { useState }  from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg'

function App() {
  const [email, setEmail] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });

    console.log(response)
  }
  return (
    <div className="container">
      <img src={logo} alt="Aricnc"/>
      <div className="content">
        <p>Orefere Spots para programadores e encontre talentos para sua empresa</p>
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">E-MAIL *</label>
          <input 
          id="email" 
          type="email" 
          placeholder="Seu melhor E-mail" 
          value={email}
          onChange= {event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

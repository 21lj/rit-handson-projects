import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("https://two537-docker-mini-app.onrender.com/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="container">
      <h1>Frontend + Backend + DB with Docker 🐳</h1>
      <p>
        Message from backend: <b>{message}</b>
      </p>



      <footer className="footer">
        Lijo Joseph, RIT-MCA-SEM1
      </footer>
    </div>
  );
}

export default App;

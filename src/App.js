import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [flagsData, setFlagsData] = useState([]);

  useEffect(() => {
    getApi()
  }, []);

  const getApi = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await res.json();
    setFlagsData(data);
  }

  return (
    <div className="container">
      <h1>Hello, home!</h1>

      <div className="flag-wrapper">
        {flagsData.map(flag => (
          <div key={flag.name} className="flag-card">
            <div className="flag-container">
              <img src={flag.flag} alt={flag.name + '\'s flag'} />
            </div>
            <div className="card-body">
              <h4>{flag.name}</h4>
              <p>Population: {flag.population}</p>
              <p>Region: {flag.region}</p>
              <p>Capital: {flag.capital}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;

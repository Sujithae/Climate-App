 /* import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=f27cdf76d26d4fd9b38190846242808&q=Chennai&aqi=no')
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataFetcher; */

/*
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';


function DataFetcher() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const key = process.env.REACT_APP_API_KEY || 'f27cdf76d26d4fd9b38190846242808';

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`)
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
    }
    const handleChange = (e) => {
      setCity(e.target.value);
    }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>Weather Data</h1>
      <form onSubmit={handleSubmit}>
        <input name="city" value={city} onChange={handleChange} type="text" placeholder="Enter city" />
        <button type="submit">Fetch Data</button>
      </form>
      {data ? <WeatherDisplay data={data} /> : <p>No data available</p>}
    </div>
  );
}

export default DataFetcher; */

/*
import axios from 'axios';
import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';


function DataFetcher() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/weather`, {
        params: { city }
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : 'An error occurred');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>Weather Data</h1>
      <form onSubmit={handleSubmit}>
        <input name="city" value={city} onChange={handleChange} type="text" placeholder="Enter city" />
        <button type="submit">Fetch Data</button>
      </form>
      {data ? <WeatherDisplay data={data} /> : <p>No data available</p>}
    </div>
  );
}

export default DataFetcher; */

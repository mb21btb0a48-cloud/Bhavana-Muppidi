// client/src/components/WeatherModule.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherModule = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect runs once when the component mounts to fetch data
  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      setError(''); // Clear previous errors
      try {
        // Use the relative path to your backend API
        const response = await axios.get('/api/weather'); 
        setData(response.data);
      } catch (err) {
        // Set a user-friendly error message
        setError('Failed to load weather data. Please try again.'); 
        console.error(err); // Log the full error internally
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
    // Empty dependency array: runs only once on mount
  }, []); 

  // --- Conditional Rendering for States ---
  if (isLoading) {
    return <p>⏳ Loading Weather Data...</p>; // Loading state
  }

  if (error) {
    return <p style={{ color: 'red', border: '1px solid red', padding: '10px' }}>⚠️ Error: {error}</p>; // Error state
  }

  if (!data) {
    return <p>Select a city to see the weather.</p>; // Initial state (optional)
  }

  // --- Display Data ---
  return (
    <div>
      <h3>Current Weather in {data.city}</h3>
      <p>Temperature: **{data.temperature}°C**</p>
      <p>Condition: **{data.condition}**</p>
    </div>
  );
};

export default WeatherModule;
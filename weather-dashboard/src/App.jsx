import React, { useEffect, useState } from "react";
import axios from "axios"

const App = () => {
  const [city, setCity] = useState(localStorage.getItem("city") || "Bengaluru");
  const [online, setOnline] = useState(navigator.onLine);
  const [weather, setWeather] = useState(null);
  const [debouncedCity, setDebouncedCity] = useState(city);


  const API_KEY=import.meta.env.VITE_WEATHER_API_KEY

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setDebouncedCity(city)
    },1000)

    return ()=>{
      clearTimeout(timer);
    }
    },[city])

  useEffect(()=>{
    const fetchWeather=async ()=>{
      try{
        const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${debouncedCity}&appid=${API_KEY}&units=metric`)
        setWeather(res.data);
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.error("Error Fetching Weather Details:", err);
        }
      }
    }
    fetchWeather();
    localStorage.setItem("city",debouncedCity);
  },[debouncedCity])

  useEffect(()=>{
   const handleOffline = () => setOnline(false);
    const handleOnline = () => setOnline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

  },[])

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h2>Weather Dashboard</h2>
      <p>Status : {online ? "✅ Online" : "❌ Offline"}</p>

      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", width: "200px" }}
      />

      {weather ? (
        <div style={{ marginTop: "20px" }}>
          <h3>{weather.name}</h3>
          <p>🌡 Temp: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <div style={{ marginTop: "20px" }}>Loading Weather....</div>
      )}
    </div>
  );
};

export default App;

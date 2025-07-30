# 🌤 Weather Dashboard (React)

A simple weather dashboard built with React to practice **useEffect**, **debounce**, and **network status detection**.  
This project uses the **OpenWeather API** (with Axios) to fetch live weather data.

---

## 🚀 Features
- Fetch **live weather data** from OpenWeather API using Axios.
- **Debounced search**: avoids API calls while typing.
- Detect **online/offline status** dynamically.
- **Persist last searched city** using `localStorage`.
- Secure API key handling with **`.env` file**.

---

## 🛠 Tech Stack
- **React (Vite)**
- **Axios** for HTTP requests
- **OpenWeather API**

---

## 🖥️ Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/YOUR_USERNAME/weather-dashboard-react.git
cd weather-dashboard-react
```
##33️⃣ Add Your API Key
Create a .env file in the project root:
```
VITE_WEATHER_API_KEY=your_openweather_api_key_here
```

In App.jsx, the API key is accessed securely:
```
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
```

4️⃣ Start Development Server
```
npm run dev
```
---

##🎯 Learning Outcomes

✅ Mastery of useEffect for API calls, cleanup, and event listeners.
✅ Implementing debounce to optimize API calls.
✅ Real-time online/offline detection.
✅ Using Axios for API handling.
✅ Proper environment variable usage in React projects.

---
This project is open-source

import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
const [weather, setWeather] = useState(null);
const [cityname, setCityname] = useState("Jyväskylä")

const API_KEY = '9f8d198281499ce8bd04d180e9362b15';
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const ICON_URL = 'http://openweathermap.org/img/wn/';

const getWeather = () => {
axios
.get(URL+cityname+'&appid='+API_KEY+'&units=metric')
.then(response => {
setWeather(response.data)
})
}

  return (
    <div className="App">
<h1>React Weather Application</h1>
<p>
This application will fetch a weather forecast from the OpenWeather.
Just type city name and click Get Forecast button!
</p>
<form>
<TextField label="Cityname"
defaultValue="Jyväskylä"
id="outlined-basic"
onChange={ (e) => setCityname(e.target.value)}
/>
<Button variant="contained"
color="primary"
size="small"
sx={{ padding: '10px 20px', margin: '10px' }}
onClick={() => getWeather()}
>
Get Forecast
</Button>
</form>
  <h2>Loaded weather forecast</h2>
{ weather !== null &&          
<div>
City: {weather.name}<br/>
Main: {weather.weather[0].main}<br/>
Temp: {weather.main.temp} °C<br/>
Feels: {weather.main.feels_like} °C<br/>
Min-Max: {weather.main.temp_min} - {weather.main.temp_max} °C<br/>
<img
alt={cityname} 
style={{height: 100, width: 100}}
src={ICON_URL+weather.weather[0].icon+'.png'}/>
</div>
}
{ weather === null &&
<p>-</p>
}
    </div>
  );
}

export default App;
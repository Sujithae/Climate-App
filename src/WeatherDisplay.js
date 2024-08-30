const WeatherDisplay = ({ data }) => {
    if (!data || !data.location) return null;
  
    return (
      <div>
        <h2>{data.location.name}, {data.location.country}</h2>
        <p>Local time: {data.location.localtime}</p>
        <h3>Current Weather</h3>
        <p>Temperature: {data.current.temp_c}°C / {data.current.temp_f}°F</p>
        <p>Condition: {data.current.condition.text}</p>
        <img src={data.current.condition.icon} alt={data.current.condition.text} />
        <p>Wind: {data.current.wind_kph} km/h, {data.current.wind_dir}</p>
        <p>Humidity: {data.current.humidity}%</p>
        <p>Feels like: {data.current.feelslike_c}°C / {data.current.feelslike_f}°F</p>
        <h4>Air Quality</h4>
        <p>US EPA Index: {data.current.air_quality['us-epa-index']}</p>
        <p>PM2.5: {data.current.air_quality.pm2_5}</p>
        <p>PM10: {data.current.air_quality.pm10}</p>
      </div>
    );
  };
  export default WeatherDisplay;
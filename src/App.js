//Modules
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import DisplayWeather from "./components/DisplayWeather";

//Styling
import "./styling/App.scss";

function App() {
  //State to store api data
  const [weatherData, setWeatherData] = useState([]);

  //State to store city name
  const [cityName, setCityName] = useState("");

  //Api call
  useEffect(() => {
    axios({
      method: "get",
      url: "http://dataservice.accuweather.com/forecasts/v1/daily/5day/49530_PC",
      params: {
        apikey: "5H4veaA1da3yOc31WURs55Qi3eZGpoQS",
      },
    })
      .then((response) => {
        //add city name as a property to api object
        response.data.cityName = "Waterloo";
        setWeatherData(response.data.DailyForecasts);
        setCityName(response.data.cityName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrapper">
      <h2>{cityName}</h2>
      <main>
        <DisplayWeather weatherData={weatherData} />
      </main>
    </div>
  );
}

export default App;

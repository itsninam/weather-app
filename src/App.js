//Modules
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import DisplayWeather from "./components/DisplayWeather";
import SelectCity from "./components/SelectCity";

//Styling
import "./styling/App.scss";

function App() {
  //State to store api data
  const [weatherData, setWeatherData] = useState([]);

  //store user input
  const [userInput, setUserInput] = useState(55073);

  //Api call
  useEffect(() => {
    axios({
      method: "get",
      url: `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${userInput}`,
      params: {
        apikey: "5H4veaA1da3yOc31WURs55Qi3eZGpoQS",
      },
    })
      .then((response) => {
        setWeatherData(response.data.DailyForecasts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userInput]);

  return (
    <div className="wrapper">
      <header>
        <SelectCity userInput={userInput} setUserInput={setUserInput} />
      </header>
      <main>
        <DisplayWeather weatherData={weatherData} />
      </main>
    </div>
  );
}

export default App;

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
        // apikey: "D2wQBxm2pFPNlJqqZBNWgMC8KLFUHrh4",
        apikey: "WPZup3rXogtlA3B8D8xJjISWfctKqy8G",
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
    <>
      <header>
        <SelectCity setUserInput={setUserInput} />
      </header>
      <main>
        <DisplayWeather weatherData={weatherData} />
      </main>
    </>
  );
}

export default App;

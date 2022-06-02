//App.js

//Modules
import { useState, useEffect } from "react";
import axios from "axios";

//Components
import DisplayWeatherData from "./components/DisplayWeatherData";
import SelectCity from "./components/SelectCity";

//Styling
import "./styling/App.scss";
import LoadingWeatherData from "./components/LoadingWeatherData";

function App() {
  //State to store api data
  const [weatherData, setWeatherData] = useState([]);

  //State to store user input
  const [userInput, setUserInput] = useState(55073);

  //State to store loading state for api data
  const [loading, setLoading] = useState(true);

  //State to store error state in case of an api request error
  const [errorMessage, setErrorMessage] = useState(false);

  //Api call
  useEffect(() => {
    axios({
      method: "get",
      url: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${userInput}`,
      params: {
        apikey: "PRMC2eoDjxvpdxAAo3174F6fanUgiHWd",
      },
    })
      .then((response) => {
        setWeatherData(response.data.DailyForecasts);
        setLoading(false);
        setErrorMessage(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorMessage(true);
      });
  }, [userInput]);

  return (
    <>
      <header>
        <SelectCity setUserInput={setUserInput} userInput={userInput} />
      </header>
      <main>
        {/* If api data has not loaded, display loading component, otherwise display api data component */}
        {loading ? (
          <LoadingWeatherData />
        ) : (
          <DisplayWeatherData
            weatherData={weatherData}
            errorMessage={errorMessage}
          />
        )}
      </main>
    </>
  );
}

export default App;

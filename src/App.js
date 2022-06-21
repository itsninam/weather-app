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
import Footer from "./components/Footer";

function App() {
  //State to store api data
  const [weatherData, setWeatherData] = useState([]);

  //State to store user input, default to waterloo
  const [userCitySelection, setUserCitySelection] = useState(55073);

  //state to capture user's input form search
  const [userCityQuery, setUserCityQuery] = useState("");

  //store user input to display on page
  const [displayUserInput, setDisplayUserInput] = useState("waterloo");

  //State to store loading state for api data
  const [loading, setLoading] = useState(true);

  //State to store error state in case of an api request error
  const [errorMessage, setErrorMessage] = useState(false);

  //Api call
  useEffect(() => {
    axios({
      method: "get",
      url: `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${userCitySelection}`,
      params: {
        apikey: "eSH49VzHNNm7CWvrsdr2zhrmfJmKYLwg",
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
  }, [userCitySelection]);

  //call api based on user's city query
  const fetchData = () => {
    axios({
      method: "get",
      url: `https://dataservice.accuweather.com/locations/v1/cities/search`,
      params: {
        apikey: "eSH49VzHNNm7CWvrsdr2zhrmfJmKYLwg",
        q: userCityQuery,
      },
    })
      .then((response) => {
        setUserCitySelection(response.data[0].Key);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorMessage(true);
      });
  };

  return (
    <>
      <header>
        <SelectCity
          userCitySelection={userCitySelection}
          setUserCitySelection={setUserCitySelection}
          userCityQuery={userCityQuery}
          setUserCityQuery={setUserCityQuery}
          fetchData={fetchData}
          setDisplayUserInput={setDisplayUserInput}
          displayUserInput={displayUserInput}
        />
      </header>
      <main>
        {/* If api data has not loaded, display loading component, otherwise display api data component */}
        {loading ? (
          <LoadingWeatherData />
        ) : (
          <DisplayWeatherData
            weatherData={weatherData}
            errorMessage={errorMessage}
            userCityQuery={userCityQuery}
            userCitySelection={userCitySelection}
            displayUserInput={displayUserInput}
          />
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

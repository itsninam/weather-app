// DisplayWeather.js

//Modules
import DateObject from "react-date-object";
import moment from "moment";
import { useState, useEffect } from "react";

const DisplayWeatherData = ({
  weatherData,
  errorMessage,
  displayUserInput,
}) => {
  //Convert from farenheight to celcius
  const toCelcius = (farenheiht) => {
    return ((farenheiht - 32) * 5) / 9;
  };

  //Create variable to hold today's date and format it to display day of week
  const todaysDate = new DateObject().format("dddd");

  //create state to hold background image class
  const [backgroundImage, setBackgroundImage] = useState("");

  //create variable to hold current hour
  const currentHour = new Date().getHours();

  //change weathercard background image based on time of day
  useEffect(() => {
    if (currentHour >= 20 || currentHour <= 4) {
      setBackgroundImage("nightCard");
    } else if (currentHour <= 12) {
      setBackgroundImage("morningCard");
    } else if (currentHour <= 19) {
      setBackgroundImage("dayCard");
    }
  }, [currentHour]);

  return (
    <>
      {/* If there is an api request error, display the error message, otherwise display the Api data */}
      {errorMessage ? (
        <h2 className="wrapper errorMessage">
          Sorry, something went wrong. Please try again later
        </h2>
      ) : (
        <div className="wrapper">
          <section className={backgroundImage}>
            {weatherData.map((data, index) => {
              return (
                <div key={index} className="weatherData">
                  {/* if result matches today's date, display today's weather data, otherwise display weekly data */}
                  {moment(data.Date).format("dddd") === todaysDate ? (
                    <>
                      <div className="weatherInfo">
                        <h1>{displayUserInput}</h1>
                        <p className="currentTemperature">
                          {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}
                          &#176;
                        </p>
                        <p className="weatherDescription">
                          {data.Day.IconPhrase}
                        </p>
                      </div>
                      <div className="imgContainer">
                        <img
                          src={require(`../../assets/${data.Day.Icon}.png`)}
                          alt={data.Day.IconPhrase}
                          className="currentWeatherImg"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flexContainer">
                        <h2>
                          {moment(data.Date).format("dddd").substring(0, 3)}
                        </h2>
                        <img
                          src={require(`../../assets/${data.Day.Icon}.png`)}
                          alt={data.Day.IconPhrase}
                          className="weeklyImgs"
                        />
                        <p className="weeklyTemperatures">
                          {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}
                          &#176;
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </section>
        </div>
      )}
    </>
  );
};

export default DisplayWeatherData;

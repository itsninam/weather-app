// DisplayWeather.js

//Modules
import DateObject from "react-date-object";
import moment from "moment";

const DisplayWeatherData = ({ weatherData, errorMessage }) => {
  //Convert from farenheight to celcius
  const toCelcius = (farenheiht) => {
    return ((farenheiht - 32) * 5) / 9;
  };

  //Create variable to hold today's date and format it to display day of week
  const todaysDate = new DateObject().format("dddd");

  return (
    <>
      {/* If there is an api request error, display the error message, otherwise display the Api data */}
      {errorMessage ? (
        <h2 className="wrapper errorMessage">
          Sorry, something went wrong. Please try again later
        </h2>
      ) : (
        <div className="wrapper">
          <section className="weatherCard">
            {weatherData.map((data, index) => {
              return (
                <div key={index} className="weatherData">
                  {/* if result matches today's date, display today's weather data, otherwise display weekly data */}
                  {moment(data.Date).format("dddd") === todaysDate ? (
                    <>
                      <h1>Today</h1>
                      <div className="flexContainer">
                        <div className="imgContainer">
                          <img
                            src={require(`../../assets/${data.Day.Icon}.png`)}
                            alt={data.Day.IconPhrase}
                            className="currentWeatherImg"
                          />
                        </div>
                        <div className="weatherInfo">
                          <p className="currentTemperature">
                            {toCelcius(data.Temperature.Maximum.Value).toFixed(
                              0
                            )}
                            &#176;
                          </p>
                          <p className="weatherDescription">
                            {data.Day.IconPhrase}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
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

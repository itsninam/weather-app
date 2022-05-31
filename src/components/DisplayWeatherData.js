// DisplayWeather.js

//Modules
import DateObject from "react-date-object";
import moment from "moment";

const DisplayWeatherData = ({ weatherData, errorMessage }) => {
  //convert from farenheight to celcius
  const toCelcius = (farenheiht) => {
    return ((farenheiht - 32) * 5) / 9;
  };

  //create variable to hold today's date and format it to display day of week
  const todaysDate = new DateObject().format("dddd");

  return (
    <>
      {errorMessage ? (
        <h2 className="errorMessage wrapper">
          Sorry, something went wrong. Please try again later
        </h2>
      ) : (
        <div className="wrapper">
          <section className="wrapper currentWeatherContainer">
            {/* if result matches today's date, display data, otherwise display nothing */}
            {weatherData.map((data) => {
              return moment(data.Date).format("dddd") === todaysDate ? (
                <div className="infoContainer">
                  <h1>Today</h1>
                  <div className="textContainer">
                    <img
                      src={require(`../../assets/${data.Day.Icon}.png`)}
                      alt={data.Day.IconPhrase}
                      className="iconImg"
                    />
                    <div className="weatherInfo">
                      <p className="temperature">
                        {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}
                        &#176;
                      </p>
                      <p className="weatherDescription">
                        {data.Day.IconPhrase}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null;
            })}
          </section>
          <section className="wrapper weeklyWeatherContainer">
            {/* if result does not match today's date, display data, otherwise display nothing */}
            {weatherData.map((data) => {
              return moment(data.Date).format("dddd") !== todaysDate ? (
                <div className="textContainer">
                  <h2>{moment(data.Date).format("dddd").substring(0, 3)}</h2>
                  <img
                    src={require(`../../assets/${data.Day.Icon}.png`)}
                    alt={data.Day.IconPhrase}
                  />
                  <p className="temperature">
                    {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}&#176;
                  </p>
                </div>
              ) : null;
            })}
          </section>
        </div>
      )}
    </>
  );
};

export default DisplayWeatherData;

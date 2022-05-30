// DisplayWeather.js

//Modules
import DateObject from "react-date-object";
import moment from "moment";

const DisplayWeather = ({ weatherData }) => {
  //convert from farenheight to celcius
  const toCelcius = (farenheiht) => {
    return ((farenheiht - 32) * 5) / 9;
  };

  //create variable for today's date
  const todaysDate = new DateObject().format("dddd");

  return (
    <section className="wrapper">
      {weatherData.map((data) => {
        console.log(data);
        return (
          <div>
            {/* convert date to day of week using .format() */}
            {/* if date matches today's date, display on top container, otherwise display all other data in bottom containers */}
            {moment(data.Date).format("dddd") === todaysDate ? (
              <div className="topContainer">
                <h2>Today</h2>
                <p>
                  {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}&#176;
                </p>
                <img
                  src={require(`../../assets/${data.Day.Icon}.png`)}
                  alt={data.Day.IconPhrase}
                />
              </div>
            ) : (
              <div>
                <h2>{moment(data.Date).format("dddd")}</h2>
                <p>
                  {toCelcius(data.Temperature.Maximum.Value).toFixed(0)}&#176;
                </p>
                <img
                  src={require(`../../assets/${data.Day.Icon}.png`)}
                  alt={data.Day.IconPhrase}
                />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default DisplayWeather;

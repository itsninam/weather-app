//SelectCity.js

//Modules
import { useEffect, useState } from "react";

const SelectCity = ({
  userCitySelection,
  setUserCitySelection,
  userCityQuery,
  setUserCityQuery,
  fetchData,
  setDisplayUserInput,
}) => {
  //Highlight Waterloo on page load, all other cities set to default font
  const [selectedWaterloo, setSelectedWaterloo] = useState(true);
  const [selectedToronto, setSelectedToronto] = useState(false);
  const [selectedVancouver, setSelectedVancouver] = useState(false);

  useEffect(() => {
    //Change state based on user city selection in order to change city label styling in jsx below
    if (userCitySelection === "55073") {
      setSelectedWaterloo(true);
      setSelectedToronto(false);
      setSelectedVancouver(false);
      setDisplayUserInput("waterloo");
    } else if (userCitySelection === "55488") {
      setSelectedWaterloo(false);
      setSelectedToronto(true);
      setSelectedVancouver(false);
      setDisplayUserInput("toronto");
    } else if (userCitySelection === "53286") {
      setSelectedWaterloo(false);
      setSelectedToronto(false);
      setSelectedVancouver(true);
      setDisplayUserInput("vancouver");
    }
  }, [userCitySelection, setDisplayUserInput]);

  //call api on user query submit
  const handleSubmit = (e) => {
    if (userCityQuery) {
      e.preventDefault();
      fetchData();
      setDisplayUserInput(userCityQuery);
      setUserCityQuery("");
      setSelectedWaterloo(false);
      setSelectedToronto(false);
      setSelectedVancouver(false);
    } else {
      alert("please enter a city");
    }
  };

  return (
    <div className="wrapper">
      <form action="">
        <input
          type="radio"
          id="waterloo"
          name="city"
          //Values obtained from api documentation
          value="55073"
          onChange={(event) => setUserCitySelection(event.target.value)}
        />
        <label
          htmlFor="waterloo"
          className={
            //If waterloo is selected, add highlighted className on click, ensure remaining cities are set to default font
            selectedWaterloo && !selectedToronto && !selectedVancouver
              ? "highlighted"
              : "cityName"
          }
        >
          Waterloo
        </label>
        <input
          type="radio"
          id="toronto"
          name="city"
          //Values obtained from api documentation
          value="55488"
          onChange={(event) => setUserCitySelection(event.target.value)}
        />
        <label
          htmlFor="toronto"
          className={
            selectedToronto && !selectedWaterloo && !selectedVancouver
              ? "highlighted"
              : "cityName"
          }
        >
          Toronto
        </label>
        <input
          type="radio"
          id="vancouver"
          name="city"
          //Values obtained from api documentation
          value="53286"
          onChange={(event) => setUserCitySelection(event.target.value)}
        />
        <label
          htmlFor="vancouver"
          className={
            selectedVancouver && !selectedToronto && !selectedWaterloo
              ? "highlighted"
              : "cityName"
          }
        >
          Vancouver
        </label>
      </form>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userCityQuery" className="cityLabel">
          Or search by city:
        </label>
        <div className="inputButtonContainer">
          <input
            id="userCityQuery"
            type="text"
            className="searchCityInput"
            value={userCityQuery}
            onChange={(event) => setUserCityQuery(event.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SelectCity;

//SelectCity.js

//Modules
import { useEffect, useState } from "react";

const SelectCity = ({ setUserInput, userInput }) => {
  //Highlight Waterloo on page load, all other cities set to default font
  const [selectedWaterloo, setSelectedWaterloo] = useState(true);
  const [selectedToronto, setSelectedToronto] = useState(false);
  const [selectedOttawa, setSelectedOttawa] = useState(false);

  useEffect(() => {
    //Change state based on user city selection in order to change city label styling in jsx below
    if (userInput === "55073") {
      setSelectedWaterloo(true);
      setSelectedToronto(false);
      setSelectedOttawa(false);
    } else if (userInput === "55488") {
      setSelectedWaterloo(false);
      setSelectedToronto(true);
      setSelectedOttawa(false);
    } else if (userInput === "55487") {
      setSelectedWaterloo(false);
      setSelectedToronto(false);
      setSelectedOttawa(true);
    }
  }, [userInput]);

  return (
    <div className="wrapper">
      <form action="">
        <input
          type="radio"
          id="waterloo"
          name="city"
          //Values obtained from api documentation
          value="55073"
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label
          htmlFor="waterloo"
          className={
            //If waterloo is selected, add highlighted className on click, ensure remaining cities are set to default font
            selectedWaterloo && !selectedToronto && !selectedOttawa
              ? "highlighted"
              : ""
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
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label
          htmlFor="toronto"
          className={
            selectedToronto && !selectedWaterloo && !selectedOttawa
              ? "highlighted"
              : ""
          }
        >
          Toronto
        </label>
        <input
          type="radio"
          id="ottawa"
          name="city"
          //Values obtained from api documentation
          value="55487"
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label
          htmlFor="ottawa"
          className={
            selectedOttawa && !selectedToronto && !selectedWaterloo
              ? "highlighted"
              : ""
          }
        >
          Ottawa
        </label>
      </form>
    </div>
  );
};

export default SelectCity;

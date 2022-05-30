//SelectCity.js

const SelectCity = ({ userInput, setUserInput }) => {
  return (
    <form action="" className="wrapper">
      <input
        type="radio"
        id="waterloo"
        name="city"
        value="55073"
        onValue={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <label for="waterloo">Waterloo</label>
      <input
        type="radio"
        id="toronto"
        name="city"
        value="55488"
        onValue={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <label for="toronto">Toronto</label>
      <input
        type="radio"
        id="bucharest"
        name="city"
        value="287430"
        onValue={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <label for="bucharest">Bucharest</label>
    </form>
  );
};

export default SelectCity;

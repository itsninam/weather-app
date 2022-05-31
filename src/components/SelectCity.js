//SelectCity.js

const SelectCity = ({ setUserInput }) => {
  return (
    <div className="wrapper">
      <form action="">
        <input
          type="radio"
          id="waterloo"
          name="city"
          //values obtained from api documentation
          value="55073"
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label htmlFor="waterloo">Waterloo</label>
        <input
          type="radio"
          id="toronto"
          name="city"
          //values obtained from api documentation
          value="55488"
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label htmlFor="toronto">Toronto</label>
        <input
          type="radio"
          id="ottawa"
          name="city"
          //values obtained from api documentation
          value="55487"
          onChange={(event) => setUserInput(event.target.value)}
        />
        <label htmlFor="ottawa">Ottawa</label>
      </form>
    </div>
  );
};

export default SelectCity;

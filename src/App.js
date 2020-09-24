import React from "react";
import "./App.css";
import getData from "./utils/data_helpers";

function App() {
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    const path = "https://week7-chjm.herokuapp.com/harvest";
    getData(path).then((data) => setUserData(data));
  }, []);
  console.log(userData);

  return (
    <div className="App">
      <header>
        <b>Test App</b>
      </header>
      {/* const foodArray = userData.map((food) => {return <p>food</p>}); */}
      {userData ? (
        userData.map((food) => <p key={food.id}>{food.food_type}</p>)
      ) : (
        <p>Loading..</p>
      )}
      {/* )) ? foodArray : <p>loading...!!!</p>} */}
    </div>
  );
}

export default App;

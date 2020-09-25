import React from "react";
import "./App.css";
import getData from "./utils/data_helpers";

function App() {
  // let path = "";
  // if (process.env.NODE_ENV === "development") {
  //   path = "http://localhost:4000/harvest";
  // }

  // if (process.env.NODE_ENV === "production") {
  //   path = "https://week7-chjm.herokuapp.com/harvest";
  // }

  const [userData, setUserData] = React.useState(null);
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_BACKEND_URL);
  React.useEffect(() => {
    const path = process.env.REACT_APP_BACKEND_URL; // process.env accesses all env files
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

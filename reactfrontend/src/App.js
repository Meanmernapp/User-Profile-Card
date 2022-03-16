import React from "react";
import User from "./components/user";
import "./sass/app.scss";

function App() {
  return (
    <div className="app__container">
      <div className="background__top">
        <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" />
      </div>
      <User />
      <div className="background__bottom">
        <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__340.jpg" />
      </div>
    </div>
  );
}

export default App;

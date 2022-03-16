import React, { useEffect, useState } from "react";
import { userFunction } from "../api";

const User = () => {
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [picture, setPicture] = useState();
  const [age, setage] = useState();
  useEffect(async () => {
    const data = await userFunction();
    console.log(data);
    setGender(data.gender);
    setName(data.name);
    setLocation(data.location);
    setEmail(data.email);
    setPicture(data.picture);
    setage(data.age);
  }, []);

  return (
    <div className="card__container">
      <div className="card">
        <div className="top__image">
          <img src={picture?.large} alt="profile Picture" />
        </div>
        <div className="profile__main">
          <div className="avatar__container">
            <div className="avatar">
              <img src={picture?.medium} alt="avatar" />
            </div>
          </div>
          <div className="profile__information">
            <div className="profile__identity">
              <h2 className="username">
                {name?.first} {name?.last}
              </h2>
              <span className="age">{age}</span>
            </div>
            <div className="location">{location?.city}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

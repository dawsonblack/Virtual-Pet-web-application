import React, { useState, useEffect } from "react";

export default function Test() {

  const getDog = () => {
    const ID = document.getElementById('text').value;
    console.log(ID);
    fetch(`api/organicDogs/${ID}`, { method: "GET", cache: "default" })
      .then((response) => response.json())
      .then((responseBody) => {
        console.log(responseBody);
        });
  };



  /*const newDog = () => {

    const dogData = {
      name: document.getElementById({NAME INPUT ID HERE}).value,
      ageInDays: 69,
      Hunger: 0,
      thirst: 0,
      energy: 10,
      mood: 7,
      cageCleanliness: 100,
      hasBeenRecentlyWalked: false,
    };

    fetch('api/organicDogs', { method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(dogData), })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Activity saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving activity:", error);
      });
  };*/

  const newDog = () => {

    const dogData = {
      name: document.getElementById("name-input").value,
      ageInDays: document.getElementById("age-input").value,
      Hunger: document.getElementById("hunger-input").value,
      thirst: document.getElementById("thirst-input").value,
      energy: document.getElementById("energy-input").value,
      mood: document.getElementById("mood-input").value,
      cageCleanliness: document.getElementById("cage-input").value,
      hasBeenRecentlyWalked: document.getElementById("been-walked-input").value,
    };

    fetch('api/organicDogs', { method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(dogData), })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Activity saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving activity:", error);
      });
  };

  return (
    <div>
      <p>AHHHHHHHHHH</p>
      <button onClick={newDog}>New Dog</button>
      <input type="text" id='text'/>
      <button onClick={getDog}>Get Dog</button>
    </div>
  );
}
import './App.css';

import { useState } from "react";

let priceOfOrange = 0.25, priceOfApples = 0.6;

let shoppingItems = [];

export default function App() {
  const [formError, setFormError] = useState("");
  const [subtotal, setSubtotal] = useState(0);

  function handleFormEntry() {
    let formEntry = document
      .getElementById("shoppingInput")
      .value.toLowerCase();

    if (formEntry === "apple" || formEntry === "orange") {
      shoppingItems.push(formEntry);
      setFormError("");
    } else {
      setFormError("Please enter 'apple' or 'orange'");
    }

    if (shoppingItems.length > 0) {
      fruitCalc(shoppingItems);
    }
  }

  // function fruitCalc(listOfItems) {
  //   //   // takes an array of shopping list items
  //   //   // loops through and calculates the total
  //   //   // for every apple * by priceOfApples
  //   //   // for every orange * by priceOfOranges

  //   let appleTotal, orangeTotal;

  //   // number of apples in arr
  //   appleTotal =
  //     listOfItems.filter(function (val) {
  //       return val === "apple";
  //     }).length * priceOfApples;

  //   // number of oranges in arr
  //   orangeTotal =
  //     listOfItems.filter(function (val) {
  //       return val === "orange";
  //     }).length * priceOfOranges;

  //   return setSubtotal(appleTotal + orangeTotal);
  // }




  
  function fruitCalc(listOfItems) {
   // OFFER FUNCTION

    // Apple section
    let noOfApples,newAppleTotal = 0;

    noOfApples = listOfItems.filter(function (val) {
      return val === "apple";
    }).length;

    if (noOfApples % 2 === 0) {
      // check they have an even number in their basket
      newAppleTotal = (noOfApples / 2) * priceOfApples;
    } else {
      noOfApples = noOfApples - 1;
      newAppleTotal = (noOfApples / 2) * priceOfApples;

      newAppleTotal += priceOfApples;
    }

    // Orange offer section
    let orangeSubtotal = 0;

    // get the length of  oranges in the array
    let orangeTotal = listOfItems.filter(function (val) {
      return val === "orange";
    }).length;

    let dealPrice = priceOfOrange * orangeTotal - priceOfOrange * 1;

    // if the total length is less than 3 no deal is applied
    if (orangeTotal < 3) {

      orangeSubtotal = orangeTotal * priceOfOrange;

    }

    if (orangeTotal % 3 === 0 || orangeTotal % 3 === 2 || orangeTotal % 3 === 1) {
      orangeSubtotal = dealPrice - priceOfOrange;
    }

    return setSubtotal(newAppleTotal + orangeSubtotal);
  }


  function onFoc() {
    document.getElementById("shoppingInput").value = "";
  }
  return (
    <div className="App">
      <h2>Apples and Oranges Shop</h2>

      <p>Enter each item in the form below: </p>
      <input
        id="shoppingInput"
        placeholder="Please enter your shopping items separated with a comma"
        type="text"
        size="50"
        autoFocus
        onFocus={onFoc}
      />
      <button onClick={handleFormEntry}>Add item</button>
      <br />
      <p className="error">{formError}</p>
      <h3>No. of items: {shoppingItems.length}</h3>
      <h3>Your items:</h3>
      <ol>
        {shoppingItems.map((el, i) => (
          <li key={i}> {el} </li>
        ))}
      </ol>

      <br />
      <br />
      <h2>Subtotal: &pound;{subtotal.toFixed(2)}</h2>
    </div>
  );
}

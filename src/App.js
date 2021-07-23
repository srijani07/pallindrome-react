import "./styles.css";
import { useState } from "react";

export default function App() {
  var [userInput, setInput] = useState(0);
  var [result, setResult] = useState(" ");

  function inputHandler(event) {
    userInput = event.target.value;
    setInput(userInput);
  }

  function clickHandler() {
    var temp = userInput;
    var rev = 0,
      rem = 0;
    while (temp != 0) {
      rem = temp % 10;
      temp = parseInt(temp / 10);
      rev = rev * 10 + rem;
    }
    console.log(userInput);
    if (rev == userInput) {
      result = "Yes, it is a pallindrome. ";
    } else result = "No, it is not a pallindrome. ";
    setResult(result);
  }
  return (
    <div className="App">
      <h1>pallindrome checker</h1>
      <input onChange={inputHandler} /> <br />
      <button class="margin-adder" onClick={clickHandler}>
        Check!
      </button>
      <br />
      {result}
    </div>
  );
}

import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput
        onChangeInput={handleUserInput}
        userInputValue={userInput}
      ></UserInput>
      {!inputIsValid && (
        <p className="center">Enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput}></Result>}
    </>
  );
}

export default App;

import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 2000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleUserInput(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: newValue,
      };
    });
  }

  return (
    <>
      <Header></Header>
      <UserInput
        onChangeInput={handleUserInput}
        userInput={userInput}
      ></UserInput>
    </>
  );
}

export default App;

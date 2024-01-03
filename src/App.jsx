import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {

  const [userInput, setUserInput] = useState({
      'initialInvestment' : 10000,
      'annualInvestment' : 1000,
      'expectedReturn': 8,
      'duration' : 5
  })

  const inputIsValid = userInput.duration > 0

  const handleChange = (InputIdentifier, newValue ) =>{
      setUserInput((prevInput) =>{
          return (
              {...prevInput, [InputIdentifier] : newValue}
          )
      } )
  }

  return (
    <>
    <Header/>
    <UserInput onHandleChange  = {handleChange} userInput = {userInput} />
    {inputIsValid && <Results input = {userInput}/>}
    </>
  )
}

export default App

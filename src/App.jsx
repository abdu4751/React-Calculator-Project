
import { useState } from 'react'
import './App.css'
import ButtonsContainer from './Components/ButtonsContainer'
import Input from './Components/Input'
function App() {

  let [userValue,setUserValue]=useState("")
  let buttonClickText=(buttonText)=>{
   if(buttonText==="C"){
    setUserValue("")
   }else if(buttonText==="="){
    let resultValue=eval(userValue)
    setUserValue(resultValue)
   }else{
    let newDisplayValue=userValue+buttonText
    setUserValue(newDisplayValue)
   }

  }

 
  

  return (
    <>
   
   <div className="main-container">
    <Input userInputValue={userValue}></Input>
    <ButtonsContainer onButtonText={buttonClickText} ></ButtonsContainer>
   </div>
    </>
  )
}

export default App

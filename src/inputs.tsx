import { useState } from "react"
import Numbers from './numbersButtons'
import Actions from "./actionsButtons"
import EqualsAndDelete from "./equalsAndDeleteButtons"
import DotButton from "./dotButton"

function Inputs() {
  const [inputState, setInputState] = useState('')
  const [answer, setAnswer] = useState(0)
  const [lastInputValue, setLastInputValue] = useState('')

  function buttonSubmitHandler(argument: number | string): void {
    setInputState(inputState + argument)
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void{
    if (event.key === "Enter") {
      setAnswer(eval(inputState))
      setLastInputValue(inputState)
      setInputState('')
    }
  }
  console.log(lastInputValue)
  return (
    <div className="border border-black border-solid w-fit mt-40 mx-auto bg-slate-200 rounded-md shadow-2xl">
      <div className="border  border-b-solid">
          <input
        className="pointer-events-none w-[235px] mx-1"
        type="text" 
        value={answer}
        /><br />

        <input
          className=" w-[235px] mx-1"
          onChange={(event) => { setInputState(event.target.value) }}
          onKeyDown={(e) => handleKeyPress(e)}
          type="text"
          value={inputState}
          placeholder={lastInputValue}
        />
      </div>
      

      <div className="flex mb-8">
        <EqualsAndDelete inputState={inputState} setAnswer={setAnswer} setInputState={setInputState} setLastInputValue={setLastInputValue}/>
        <DotButton buttonSubmitHandler={buttonSubmitHandler} />
      </div>

      <div className="flex">
        <Numbers buttonSubmitHandler={buttonSubmitHandler}/>
        <Actions buttonSubmitHandler={buttonSubmitHandler} inputState={inputState} setInputState={setInputState}/>
      </div>
    </div>
  )
}

export default Inputs

import { useState } from "react"

type EqualsAndDeleteProps = {
  inputState: string,
  setAnswer: (state: number) => void,
  setInputState: (state: string) => void
  setLastInputValue: (state: string) => void
}

function EqualsAndDelete({inputState, setAnswer, setInputState, setLastInputValue}: EqualsAndDeleteProps) {

  function pressEqualsHandler(): void {
    const ansver = eval(inputState)
    setAnswer(ansver)
    setLastInputValue(inputState)
    setInputState('')
  }

  function deleteOneSimbol(): void {
    const solution = inputState.slice(0, -1)
    setInputState(solution)
  }

  function deleteAllSimbols(): void {
    setInputState('')
  }

  return (
    <div className="mt-2 ml-3 w-[160px] flex gap-5 flex-wrap justify-between">
      <button
        key='='
        onClick={() => pressEqualsHandler()}
        className="w-10 h-10 bg-slate-400 border border-solid border-black shadow-sm"
      >
        =
      </button>
      <button
        key='delete'
        className="w-10 h-10 bg-slate-400 border border-solid border-black shadow-sm"
        onClick={() => deleteOneSimbol()}
      >
        del
      </button>
      <button
        key='С'
        className="w-10 h-10 bg-slate-400 border border-solid border-black shadow-sm"
        onClick={() => deleteAllSimbols()}
      >
        С
      </button>
    </div>
  )
}

export default EqualsAndDelete

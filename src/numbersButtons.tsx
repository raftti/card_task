import ParenthesesButtons from "./parenthesesButtons"

type NumbersProps = {
  buttonSubmitHandler: (number: number) => void;
}

function Numbers({buttonSubmitHandler}: NumbersProps) {
  const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return (
    <div className="mb-3 ml-3 w-[160px] flex gap-5 flex-wrap justify-between">
      {arrayOfNumbers.map(number => (
        <button key={number} onClick={() => buttonSubmitHandler(number)} className=" shadow-md w-10 h-10 bg-orange-100 rounded-sm border border-solid border-black">{number}</button>
      ))}
        <ParenthesesButtons buttonSubmitHandler={buttonSubmitHandler} />
    </div>
  )
}

export default Numbers

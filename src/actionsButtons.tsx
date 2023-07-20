type ActionsProps = {
  buttonSubmitHandler: Function,
  inputState: string,
  setInputState: Function
}

function Actions({ buttonSubmitHandler, inputState}: ActionsProps) {
  const arrayOfActions: Array<string> = ['+', '-', '/', '*'];

  return (
    <div className="mr-3 ml-[20px] flex w-10 h-[220px] flex-col justify-between">
      {arrayOfActions.map(action => {
        
        const isActive = arrayOfActions.some(item => inputState.endsWith(item))
        if (!isActive) {
          return (
            <button
              key={action}
              onClick={() => buttonSubmitHandler(action)}
              className="w-10 h-10 bg-amber-400 border border-solid border-black rounded-sm shadow-md"
            >
              {action}
            </button>
          );
        } else {
          return (
            <button
              key={action}
              className="w-10 h-10 bg-slate-400 border border-solid border-black"
              disabled
            >
              {action}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Actions;

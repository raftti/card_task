type ParenthsesProps = {
    buttonSubmitHandler: Function,
}
  

function ParenthesesButtons({buttonSubmitHandler}: ParenthsesProps) {
    return (
        <>
            <button
                key='('
                onClick={() => buttonSubmitHandler('(')}
                className="w-10 h-10 bg-slate-400 border border-solid border-black shadow-sm"
                >
            (
            </button>
            <button
                key=')'
                className="w-10 h-10 bg-slate-400 border border-solid border-black shadow-sm"
                onClick={() => buttonSubmitHandler(')')}
                >
            )
            </button>
        </>
    )
}

export default ParenthesesButtons
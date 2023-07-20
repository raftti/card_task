type DotProps = {
    buttonSubmitHandler: Function,
}
  

function DotButton({buttonSubmitHandler}: DotProps) {
    return (
        <button
            key='.'
            onClick={() => buttonSubmitHandler('.')}
            className="mt-2 mr-3 ml-[20px] w-10 h-10 bg-slate-400 border border-solid border-black"
        >
        .
        </button>
    )
}

export default DotButton
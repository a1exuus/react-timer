import '../Button.css'

function Button({ value, clicked }) {
    return (
        <button onClick={clicked}>{ value }</button>
    )
}

export { Button }
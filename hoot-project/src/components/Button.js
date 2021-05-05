import '../styles/components/Button.css'

function Button(props) {
    return (
            <button className='main-btn round-border' onClick={props.onClick}>{props.content}</button>
    )
}

export default Button
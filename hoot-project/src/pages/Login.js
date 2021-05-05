import Cookies from 'js-cookie'
import '../styles/pages/Login.css'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

function Login() {

    let history = useHistory()

    function onClick() {
        Cookies.set('token', '1892YUEAKJSFN9813BHGAGHX56')
        history.push("/home")
    }

    return (
            <div className='login-page'>
                <div>
                    <img className='logo-hoot' src="icons/logo.svg" alt="logo icon"/>
                    <span className='title-login title-lg'>Hoot</span>
                </div>
                <Button content={'Sign-in'} onClick={onClick} />
            </div>
    )
}

export default Login
import '../styles/pages/Messages.css'
import TopMenu from '../components/TopMenu'
import BottomMenu from '../components/BottomMenu'
import SearchField from '../components/SearchField'
import UserMessage from '../components/UserMessage'
import { useLocation, useHistory  } from 'react-router-dom'

function Messages() {

    let location = useLocation()
    let history = useHistory()

    function bottomMenuClick(event) {
        console.log(event.currentTarget.firstChild.className.baseVal)
        console.log(location.pathname)

        if (event.currentTarget.firstChild.className.baseVal !== location.pathname) {
            history.push(event.currentTarget.firstChild.firstChild.className.baseVal)
        }
        
    }

    function imgClick() {
        history.push('/profile')
    }

    return (
            <div className='messages-page'>
                <TopMenu 
                    middle={'Messages'}
                    right={
                        <span>
                            Right
                        </span>
                    }
                    page={'Messages'}
                    imgClick={imgClick}
                />
                <div className='messages-body main-body'>
                    <SearchField />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                    <UserMessage />
                </div>
                <BottomMenu handleClick={bottomMenuClick} />
            </div>
    )
}

export default Messages
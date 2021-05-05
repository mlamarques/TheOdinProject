import '../styles/pages/Profile.css'
import TopMenu from '../components/TopMenu'
import BottomMenu from '../components/BottomMenu'
import { useLocation, useHistory  } from 'react-router-dom'

function Profile() {

    let location = useLocation()
    let history = useHistory()

    function bottomMenuClick(event) {
        console.log(event.currentTarget.firstChild.className.baseVal)
        console.log(location.pathname)

        if (event.currentTarget.firstChild.className.baseVal !== location.pathname) {
            history.push(event.currentTarget.firstChild.firstChild.className.baseVal)
        }
        
    }

    function returnPage() {
        history.goBack()
    }

    return (
            <div className='profile-page'>
                <TopMenu 
                    middle={
                        <span>
                            Mid
                        </span>
                    }
                    right={
                        <span>
                            Right
                        </span>
                    }
                    page={'Profile'}
                    returnClick={returnPage}
                />
                <div>
                    Profile Page
                </div>
                <BottomMenu handleClick={bottomMenuClick} />
            </div>
    )
}

export default Profile
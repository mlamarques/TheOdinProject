import '../styles/pages/Liked.css'
import TopMenu from '../components/TopMenu'
import BottomMenu from '../components/BottomMenu'
import Feed from '../components/Feed'
import { useLocation, useHistory  } from 'react-router-dom'

function Liked() {

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
            <div className='liked-page'>
                <TopMenu 
                    middle={'Liked'}
                    right={
                        <span>
                            Right
                        </span>
                    }
                    page={'Liked'}
                    imgClick={imgClick}
                />
                <div className='liked-body main-body'>
                    <Feed />
                    <Feed />
                    <Feed />
                </div>
                <BottomMenu handleClick={bottomMenuClick} />
            </div>
    )
}

export default Liked
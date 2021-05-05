import '../styles/pages/Home.css'
import TopMenu from '../components/TopMenu'
import BottomMenu from '../components/BottomMenu'
import Feed from '../components/Feed'
import ComposeButton from '../components/ComposeButton'
import { useLocation, useHistory  } from 'react-router-dom'

function Home() {

    let location = useLocation()
    let history = useHistory()

    function bottomMenuClick(event) {
        console.log(event.currentTarget.firstChild.firstChild.className.baseVal)
        console.log(location.pathname)

        if (event.currentTarget.firstChild.className.baseVal !== location.pathname) {
            history.push(event.currentTarget.firstChild.firstChild.className.baseVal)
        }
        
    }

    function imgClick() {
        history.push('/profile')
    }

    function composeClick() {
        console.log('Compose new tweet')
    }
    
    const composeIconPath = <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                            </path>

    return (
            <div className='home-page'>
                <TopMenu 
                    // left={
                    //     <span>
                    //         left
                    //     </span>
                    // }
                    middle={'Home'}
                    right={
                        <span>
                            Right
                        </span>
                    }
                    page={'Home'}
                    imgClick={imgClick}
                />
                <div className='page-body main-body'>
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                </div>
                <ComposeButton svgPath={composeIconPath} onClick={composeClick} />
                <BottomMenu handleClick={bottomMenuClick}/>
            </div>
    )
}

export default Home
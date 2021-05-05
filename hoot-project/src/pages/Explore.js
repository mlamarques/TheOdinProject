import '../styles/pages/Explore.css'
import TopMenu from '../components/TopMenu'
import BottomMenu from '../components/BottomMenu'
import Feed from '../components/Feed'
import SearchField from '../components/SearchField'
import { useLocation, useHistory  } from 'react-router-dom'
import { useState } from 'react'

function Explore() {

    const [topMenuStatus, setTopMenuStatus] = useState('off')
    
    

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

    let prevScrollpos = window.pageYOffset;

    function menuScroll() {
         let currentScrollPos = window.pageYOffset;
         if (prevScrollpos > currentScrollPos) {
             setTopMenuStatus('off')
        } else if (currentScrollPos > 0) {
             setTopMenuStatus('on')
        }
         prevScrollpos = currentScrollPos;
    } 

    return (
            <div className='explore-page'>
                <TopMenu 
                    middle={'Explore'}
                    right={
                        <span>
                            Right
                        </span>
                    }
                    page={'Explore'}
                    imgClick={imgClick}
                    
                    topMenuStatus={topMenuStatus === 'on' ? 'top-menu--hidden' : ''}
                />
                <div className='explore-body main-body' onWheel={menuScroll}>
                    <SearchField />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />
                </div>
                <BottomMenu handleClick={bottomMenuClick} />
            </div>
    )
}

export default Explore
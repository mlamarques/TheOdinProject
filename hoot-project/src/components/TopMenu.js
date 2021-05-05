import '../styles/components/TopMenu.css'

function TopMenu(props) {

    const column1 = () => {
        if (props.page === 'Home' || props.page === 'Explore' || props.page === 'Liked' || props.page === 'Messages') {
            return <img onClick={props.imgClick} className='round-border change-cursor-pointer' src='images/index.jpg' alt=''></img>
        }
        if (props.page === 'Profile' || props.page === 'Messages chat' || props.page === 'Edit profile') {
            return <svg className='change-cursor-pointer' onClick={props.returnClick} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976314 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292893 7.29289ZM17 7L1 7L1 9L17 9L17 7Z" fill="#2E384D"/>
                    </svg>
        }
        if (props.page === 'Compose') {
            return <img onClick={props.imgClick} src='images/index.jpg' alt='user img'></img>
        }
    }

    return (
            <div className={`top-menu noselection ${props.topMenuStatus}`} >
                <div className='left title-lg'>
                    <div className='col1'>
                        {column1()}
                    </div>
                </div>
                <div className='middle'>
                    <h2 className='title-lg2'><span>{props.middle}</span></h2>
                    
                </div>
                <div className='right title-lg'>{props.right}</div>
            </div>
    )
}

export default TopMenu
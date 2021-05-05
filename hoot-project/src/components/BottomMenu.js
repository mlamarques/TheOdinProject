import '../styles/components/BottomMenu.css'
import { useHistory } from 'react-router-dom'

function BottomMenu(props) {

    let history = useHistory()

    const iconStyle = (name) => {

        if (history.location.pathname === name)
        return "#0182FC"
        if (history.location.pathname !== name)
        return "#2E384D"
    }
    return (
            <div className='bottom-menu noselection'>
                <a className='change-cursor-pointer' onClick={props.handleClick}>
                    <div className='home-btn icon-container'>
                        <svg className='/home' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 25V17.5H17.5V25H23.75V15H27.5L15 3.75L2.5 15H6.25V25H12.5Z" fill={iconStyle('/home')}/>
                        </svg>
                    </div>
                </a>
                <a className='change-cursor-pointer' onClick={props.handleClick}>
                    <div className='explore-btn icon-container'>
                        <svg className='/explore'  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 17.5H18.3875L18.0375 17.1625C19.2625 15.7375 20 13.8875 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z" fill={iconStyle('/explore')}/>
                        </svg>
                    </div>
                </a>
                <a className='change-cursor-pointer' onClick={props.handleClick}>
                    <div className='liked-btn icon-container'>
                    <svg className='/liked' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5012 27H15.4838C12.2708 26.9391 3 18.3943 3 10.3013C3 6.41334 6.14086 3 9.72082 3C12.5694 3 14.485 5.00486 15.5 6.4641C16.5125 5.0074 18.4282 3 21.2779 3C24.8604 3 28 6.41334 28 10.3025C28 18.393 18.7279 26.9378 15.5149 26.9975H15.5012V27Z" fill={iconStyle('/liked')}/>
                    </svg>
                    </div>
                </a>
                <a className='change-cursor-pointer' onClick={props.handleClick}>
                    <div className='messages-btn icon-container'>
                        <svg className='/messages' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM25 10L15 16.25L5 10V7.5L15 13.75L25 7.5V10Z" fill={iconStyle('/messages')}/>
                        </svg>
                    </div>
                </a>
            </div>
    )
}

export default BottomMenu
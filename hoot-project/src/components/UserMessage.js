import '../styles/components/UserMessage.css'

function UserMessage() {
    const lastWord = 'to ligado'
    const dDate = 'Apr 23'

    return (
            <div className="user-message-container">
                <div className="photo-container">
                    <a className='user-logo-link'>
                        <div className='logo-img round-border'>
                            
                        </div>
                        {/* <img className='logo-img round-border' alt='' src='images/a1P9FSnS_200x200'></img> */}
                    </a>
                </div>
                <div className="text-container">
                    <div className="user-info">
                        <a className='user-name-link font-medium'>
                            <div className='user-nickname text-overflow'>
                                <span className='user-nickname-value text-wrap font-bold'>Daniel Barros</span>
                            </div>
                            <div className='user-address text-secondary text-overflow'>
                                <span className='user-address-value text-wrap'>@barrosdaniel</span>
                            </div>
                        </a>
                        <div className='user-last-message text-secondary text-overflow'>
                                <span className='user-last-message-value text-wrap'>{lastWord}</span>
                        </div>
                    </div>
                    <div className="date-container text-secondary text-overflow">
                        <time dateTime="2021-04-23T19:12:07.738Z">{dDate}</time>
                    </div>
                </div>
            </div>
    )
}

export default UserMessage
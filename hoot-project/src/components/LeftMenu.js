import '../styles/components/Leftmenu.css'

function Leftmenu() {
    return (
            <div className='left-menu'>
                <img onClick={props.profileClick} src='images/index.jpg' alt='user img'></img>
                <div className='nickname'>
                    <span>
                        Josias Roberto
                    </span>
                </div>
                <div className='user-address'>
                    <span>
                        @Josi.Robert.Son
                    </span>
                </div>
                <div className='following-field'>
                    <a>
                        <span className='following-value'>165</span>
                        <span className='following-text'>Following</span>
                    </a>
                </div>
                <div className='followers-field'>
                    <a>
                        <span className='followers-value'>33</span>
                        <span className='followers-text'>Followers</span>
                    </a>
                </div>
            </div>
    )
}

export default Leftmenu
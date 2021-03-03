import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='background-photo'>
            <div className='main-button'>
                <Link to='/catalog'>
                    <div>Collection</div>
                </Link>
            </div>
        </div>
    )
}

export default Home
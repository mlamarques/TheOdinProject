import React from 'react'
import '../styles/Catalog.css'
import products from '../products.json'
import { Link } from 'react-router-dom'

const Catalog = () => {

    const cards = products.map(item => <div className='container' key={item.id}>
                                            <Link to={`/product/${item.id}`}><img src={item.url} alt='clothes-img'></img></Link>
                                            <div>{item.name}</div> 
                                            {console.log(item.url)}
                                       </div>)
    return (
        <div>
            <div className='cards-container'>
                {cards}
            </div>
        </div>
    )
}

export default Catalog
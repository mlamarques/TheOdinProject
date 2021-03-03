import React from 'react'
import '../styles/Catalog.css'
import products from '../products.json'

const Catalog = () => {
    const cards = products.map(item => <div className='container' key={item.id}>
                                            <img src={item.url} alt='clothes-img'></img>
                                            <div>{item.name}</div> 
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
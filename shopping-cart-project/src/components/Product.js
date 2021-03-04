import React from 'react'
import products from '../products.json'
import '../styles/Product.css'

const Product = (props) => {
    
    //const [item] = products.filter(item => item.id === match.params.id)
    const [item] = products.filter(item => item.id === props.match.params.id)
    
    return (
        <div className='product-container'>
            <div>
                <img src={`.${item.url}`} alt='clothes-img'></img>
            </div>
            <div>
                <div className='product-info'>
                    <h1>{item.name}</h1>
                    <h2 className='price'>{item.price} USD</h2>
                    <button onClick={() => props.handleClick(props.match.params.id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
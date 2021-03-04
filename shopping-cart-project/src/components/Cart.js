import React from 'react'
import '../styles/Cart.css'

const Cart = (props) => {
    
    return (
        <div className='cart-container'>
            <div className='checkout-container'>
                <div className='checkout-item'>
                    <img src={props.url} alt='clothes-img'></img>
                    <span>{props.name}</span>
                    <div>
                        <h4>Quantity</h4>
                        <div className='quantity-buttons'>
                            <button>-</button>
                            <span>{props.quantity}</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className='cost-container'>
                        <h4>Unit Cost</h4>
                        <span>{props.unitValue}</span>
                    </div>
                    <div className='cost-container'>
                        <h4>Total Cost</h4>
                        <span>{props.totalValue}</span>
                    </div>
                    <div className='remove-item'>
                        <span onClick={() => props.handleClose(props.id)}><i className="fas fa-times"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Cart from './Cart'
import Catalog from './Catalog'
import Home from './Home'
import Product from './Product'
import Void from './Void'
import products from '../products.json'
import { useEffect, useState } from 'react'

const Routes = () => {

    const [productsList, setProductsList] = useState(products)
    const [cartCount, setCartCount] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    function handleClick(id) {
        
        setProductsList(prev => prev.map(item => item.id === id ? {...item, count: item.count + 1} : item))
    }

    function handleClose(id) {
        // productsList.map(item => item.id === id && item.count --)
        setProductsList(prev => prev.map(item => item.id === id ? {...item, count: 0} : item))
        console.log(id)
        console.log(productsList)
        console.log(cartCount)
    }

    function handleAddition(id) {
        setProductsList(prev => prev.map(item => item.id === id ? {...item, count: item.count + 1} : item))
    }

    function handleSubstratction(id) {
        setProductsList(prev => prev.map(item => item.id === id && item.count > 1 ? {...item, count: item.count - 1} : item))
    }

    useEffect(() => {
        setTotalCost(productsList.reduce((sum, item) => sum + (item.price * item.count), 0))
        setCartCount(productsList.reduce((sum, item) => sum + item.count, 0))
    }, [cartCount, productsList, totalCost])

    const totalStyle = {
        'marginTop': '2rem',
        'fontSize': '3rem',
        'position': 'relative',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'alignContent': 'center',
        
    }

    const totalStyleSpan = {
        'margin': '2rem',
        'fontFamily': 'Montserrat',
    }

    const itemsList = <Route exact path="/cart" render={(props =>
                                <div>
                                   {cartCount !== 0 ?
                                    productsList.map(item =>
                                            item.count !== 0 &&
                                            <Cart 
                                            {...props}
                                            key={item.id}
                                            url={item.url}
                                            name={item.name}
                                            quantity={item.count}
                                            unitValue={item.price.toLocaleString()}
                                            totalValue={(item.price * item.count).toLocaleString()}
                                            id={item.id}
                                            handleSubstratction={handleSubstratction}
                                            handleAddition={handleAddition}
                                            handleClose={handleClose}
                                        />
                                        )
                                    : <Void />
                                    }
                                    <div style={totalStyle}>TOTAL<span style={totalStyleSpan}>{totalCost.toLocaleString()} USD</span></div>
                                </div>
                            )}
                        />
     

    return (
        <BrowserRouter>
            <Navbar count={cartCount}/>
            <Switch>
            {itemsList}
                <Route exact path="/catalog" render={(props =>
                    <Catalog
                        {...props}
                    />)}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id" render={(props => 
                    <Product
                        {...props}
                        handleClick={handleClick} 
                    />)} 
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Cart from './Cart'
import Catalog from './Catalog'
import Home from './Home'
import Product from './Product'
import products from '../products.json'
import { useState } from 'react'

const Routes = () => {

    const [cartCount, setCartCount] = useState(0)

    // useEffect(() => {
        
    // }, [cartCount])

    function handleClick(id) {
        products.map(item => item.id === id && item.count ++)
        const [itemClicked] = products.filter(item => item.id === id)
        // console.log(itemClicked)
        console.log(itemClicked)

        setCartCount(products.reduce((sum, item) => sum + item.count, 0))
    }

    //let cartCount = products.reduce((sum, item) => sum + item.count, 0)
    
    return (
        <BrowserRouter>
            <Navbar count={cartCount}/>
            <Switch>
                <Route exact path="/cart" render={(props => <Cart {...props} count={cartCount} />)} />
                <Route exact path="/catalog" render={(props =>
                    <Catalog
                        {...props}
                    />)}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id" render={(props => 
                    <Product
                        {...props}
                        handleClick={handleClick} 
                    />)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
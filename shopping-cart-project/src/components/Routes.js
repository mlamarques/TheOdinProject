import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Cart from './Cart'
import Catalog from './Catalog'
import Home from './Home'
import Product from './Product'

const Routes = (props) => {
    
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/cart" component={Cart} id={props.id}/>
                <Route exact path="/catalog" component={Catalog}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product/:id" component={Product}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
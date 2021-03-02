import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from './App'
import Profile from './Profile'
import Menu from './Menu'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact  path="/" component={App}/>
                <Route exact  path="/profile" component={Profile}/>
                <Route exact  path="/menu" component={Menu}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
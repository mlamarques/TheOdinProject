import { Route, Router, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import Liked from './pages/Liked'

export default function MainRoutes() {


    return (
        <Switch>
            <Route path="/login"> <Login /> </Route>
            <Route path="/home"> <Home /> </Route>
            <Route path="/explore"> <Explore /> </Route>
            <Route path="/messages"> <Messages /> </Route>
            <Route path="/liked"> <Liked /> </Route>
            <Route path="/profile"> <Profile /> </Route>
            <Route render={() => <Home />} />
        </Switch>
    )
}
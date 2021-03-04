import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Cart from './Cart'
import Catalog from './Catalog'
import Home from './Home'
import Product from './Product'
import products from '../products.json'

const Routes = () => {

    //const [cartCount, setCartCount] = useState

    // useEffect(() => {
        
    // }, [cartCount])

    function handleClick() {
        // const [itemClicked] = products.filter(item => item.id === id)
        // console.log(itemClicked)
        console.log(2)
    }

    let cartCount = products.reduce((sum, item) => sum + item.count, 0)
    
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
                <Route exact path="/product/:id" render={((match, props) => 
                    <Product 
                        {...match}
                        {...props}
                        handleClick={handleClick} 
                    />)} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
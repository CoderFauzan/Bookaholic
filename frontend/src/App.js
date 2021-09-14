import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <BrowserRouter>
      
      <Route path ='/' component={Homescreen} exact />
      <Route path ='/product/:id' component={Productdescscreen} exact/>
      <Route path ='/cart' component={Cartscreen} exact/>
      <Route path ='/login' component={Loginscreen} exact/>
      <Route path ='/register' component={Registerscreen} exact/>
      <Route path ='/orders' component={Ordersscreen} exact/>
      <Route path ='/orderinfo/:orderid' component={Orderinfo} exact/>
      <Route path ='/profile' component={Profilescreen} exact />
      <Route path ='/admin' component={Adminscreen}/>
      </BrowserRouter>

    </div>
  );
}

export default App;

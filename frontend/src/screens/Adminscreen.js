import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Switch } from "react-router-dom";
import Addproduct from './Addproduct';
import Editproduct from './Editproduct';
import Orderslist from './Orderslist';
import Productslist from './Productslist';
import Userslist from './Userslist';

export default function Adminscreen() {
    return (
        <div>
            <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2>Admin Panel</h2>

          <ul className="admin">
          <li><Link to='/admin/userslist' style={{color: 'red'}}>Users List</Link></li>
            <li><Link to='/admin/productslist' style={{color: 'green'}}>Product List</Link></li>
            <li>
            <Link to='/admin/addnewproduct' style={{color: 'yellow'}}>Add Product</Link>
            </li>
            <li>
            <Link to='/admin/orderslist' style={{color: 'blue'}}>Orders List</Link>
            </li>

            
          </ul>


          <Switch>
          
         
              <Route path="/admin/userslist" component={Userslist} exact/>
              <Route path="/admin/orderslist" component={Orderslist} exact/>
              <Route path="/admin/productslist" component={Productslist} exact/>
              <Route path="/admin/addnewproduct" component={Addproduct} exact/>
              <Route path='/admin/editproduct/:productid' component={Editproduct} />
          </Switch>
        </div>
      </div>
        </div>
    )
}

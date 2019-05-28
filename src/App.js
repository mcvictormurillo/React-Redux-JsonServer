import React from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import CrearProducto from './components/CrearProducto';
import Productos from './components/Productos'
import EditarProducto from './components/EditarProducto';
import NotRoute from './components/NotRoute';
class App extends React.Component {
  render(){
    return (
     <Provider store={store}>
       <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Productos} />
          
          <Route  exact path="/crear-producto" component={CrearProducto} />
          <Route  exact path="/editar/:id" render={(props)=>{
            console.log(props)
            const id = props.match.params.id
            return(<EditarProducto id={id} />)
          }} />
          <Route component={NotRoute}/>
          
        </Switch>
       </BrowserRouter>
       
       
     </Provider>
    );
  }
}

export default App;

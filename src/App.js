import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home/Home';
import Pedidos from './componentes/Pedidos/Pedidos';
import ListaPedidos from './componentes/ListaPedidos/ListaPedidos';
import './componentes/Estylos/style.css'
import Login from './componentes/Login/Login';
import Productos from './componentes/Productos/Productos'
import Registro from './componentes/Registro/Registro';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/compras" component={Pedidos} />
          <Route exact path="/lista-pedidos" component={ListaPedidos} />
          <Route exact path="/productos" component={Productos}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registro" component={Registro}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

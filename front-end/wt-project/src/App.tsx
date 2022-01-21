import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Contato from './pages/contato/Contato';
import SobreNos from './pages/sobrenos/SobreNos';
import CadastroUser from "./pages/cadastroUser/CadastroUser";
import Login from "./pages/login/Login";
import Home from './pages/home/Home';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/logar'>
            <Login />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/contato'>
            <Contato />
          </Route>

          <Route path='/sobre-nos'>
            <SobreNos />
          </Route>

          <Route path='/cadastrar'>
            <CadastroUser />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
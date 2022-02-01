import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Contato from './pages/contato/Contato';
import SobreNos from './pages/sobrenos/SobreNos';
import CadastroUser from "./pages/cadastroUser/CadastroUser";
import Login from "./pages/login/Login";
import Home from './pages/home/Home';
import ListarPostagem from './components/postagens/listarPostagem/ListarPostagem';
import ListarTema from './components/temas/listarTemas/ListarTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import './App.css';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTemas from './components/temas/cadastroTemas/CadastroTemas';
import {Provider} from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>

    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>

          <Route exact path='/'>
            <Login />
          </Route>

          <Route path='/login'>
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

          <Route path='/temas'>
              <ListarTema />
            </Route>

            <Route path='/postagens'>
              <ListarPostagem />
            </Route>

    

         
          <Route exact path='/formularioPostagem'>
            <CadastroPostagem />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPostagem />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTemas />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTemas />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>



        </div>
      </Switch>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
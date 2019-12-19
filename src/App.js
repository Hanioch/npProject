import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Connexion from './components/connexion/index'
import Inscription from './components/inscription/index'
import acceuil from './components/acceuil/index'
import Page404 from './components/404/index'
//  <Route  path='/accueil/:categorie' component={acceuil}/>

function App() {
  return (
    <BrowserRouter>
    <Switch>
  <Route exact path='/connexion' component={Connexion}/>
  <Route exact path='/inscription' component={Inscription}/>
  <Route  path='/accueil/:categorie' component={acceuil}/>
  <Route path='/accueill/categorie/:genre' component={acceuil}/>
  <Route path='/accueiil/categorie/genre/:list' component={acceuil}/>
  <Route path='/404' component={Page404}/>
  </Switch>

</BrowserRouter>

  );
}

export default App;

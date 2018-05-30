import React, { Component } from 'react';
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'
import Sidebar from '../src/Components/Sidebar'
import Movies from '../src/Components/Movies'
import Character from '../src/Components/Character'
import Planets from '../src/Components/Planets'
import Content from '../src/Components/Content'
import { Link, Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container" style={{ marginTop : 80 }}>
          <div class="row">
            <Sidebar />
            <Route path = '/Home' component = {Content} />
            <Route path = '/Movies' component = {Movies} />
            <Route path = '/Characters' component = {Character} />
            <Route path = '/Planets' component = {Planets} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'


export default class App extends Component {
    render() {
        return (
            <div class="col-md-3">

                <p class="lead">About the movie</p>
                <div class="list-group" >
                    <Link className="list-group-item" to='/Home'>Home</Link>
                    <Link className="list-group-item" to='/Movies'>Movies</Link>
                    <Link className="list-group-item" to='/Characters'>Characters</Link>
                    <Link className="list-group-item" to='/Planets'>Planets</Link>
                </div>

            </div>
        );
    }
}

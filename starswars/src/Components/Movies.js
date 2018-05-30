import React, { Component } from 'react';
import MoviesContent from '../Components/Moviescontent'
import axios from 'axios'

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            get: [],
        }
    }

    componentDidMount() {
        axios.get('https://swapi.co/api/films/')
            .then(response => {
                console.log(response)
                this.setState({ get: response.data.results })
            })
    };

    cari = search => {
        this.setState({ search });
    }

    render() {
        return (
            <div class="col-md-9">
                <img class="ui medium rounded image" src="http://cdn.tvguide.co.uk/wp-content/uploads/2017/01/23170918/star-wars1.jpg" style={{ width: 1000, height: 300, borderRadius: 20 }} />
                <br />
                <div className="ui search" style={{marginLeft: 300}}>
                    <div className="ui icon input search">
                        <input className="prompt" type="text" placeholder="Search Movie" ref="search" onChange={() => { this.cari(this.refs.search.value); }} />
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>
                <br />
                <br />
                <h1>Movies</h1>
                {this.state.get.filter(item =>
                    (new RegExp(this.state.search, 'gi')).test(item.title))
                    .map(item =>
                        <MoviesContent {...item} />
                    )}
            </div>
        );
    }
}



import React, { Component } from 'react';
import '../Styles/Content.css'
import gambar1 from '../Image/halo.png'

export default class Content extends Component {
    render() {
        return (
            <div class="col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><img class=" img-fluid" src='http://vignette2.wikia.nocookie.net/starwars/images/4/46/Mustafar.png/revision/latest?cb=20140321174124' alt="card image" /></p>
                                    <h4 class="card-title">{this.props.name}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{this.props.name}</h4>
                                    <p class="card-text">Rotation Period : {this.props.rotation_period}</p>
                                    <p class="card-text">Orbital Period : {this.props.orbital_period}</p>
                                    <p class="card-text">Diameter : {this.props.diameter}</p>
                                    <p class="card-text">Climate : {this.props.climate}</p>
                                    <p class="card-text">Gravity : {this.props.gravity}</p>
                                    <p class="card-text">Terrain : {this.props.terrain}</p>
                                    <p class="card-text">Surface Water : {this.props.surface_water}</p>
                                    <p class="card-text">Population : {this.props.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

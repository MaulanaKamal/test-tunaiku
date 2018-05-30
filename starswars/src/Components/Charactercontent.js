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
                                    <p><img class=" img-fluid" src='https://i.pinimg.com/736x/9a/af/6d/9aaf6d68e44691d7e6ac4a4daf0252d3--star-wars-wallpaper-iphone-stormtrooper-tattoo.jpg' alt="card image" /></p>
                                    <h4 class="card-title">{this.props.name}</h4>
                                    <h4 class="card-title">Gender : {this.props.gender}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{this.props.name}</h4>
                                    <p class="card-text">Height : {this.props.height}</p>
                                    <p class="card-text">Mass : {this.props.mass}</p>
                                    <p class="card-text">Hair Color : {this.props.hair_color}</p>
                                    <p class="card-text">Skin Color : {this.props.skin_color}</p>
                                    <p class="card-text">Eye Color : {this.props.eye_color}</p>
                                    <p class="card-text">Birth Year : {this.props.birth_year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

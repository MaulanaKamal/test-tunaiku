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
                                    <p><img class=" img-fluid" src='https://images-na.ssl-images-amazon.com/images/I/71Gz8xrwErL._SL1500_.jpg' alt="card image" /></p>
                                    <h4 class="card-title">{this.props.title}</h4>
                                    <h4 class="card-title">Release date : {this.props.release_date}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">{this.props.title}</h4>
                                    <p class="card-text">{this.props.opening_crawl}</p>
                                    <a href="https://grandxxi.com/?s=star+wars">Enjoy watching <img src={gambar1} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

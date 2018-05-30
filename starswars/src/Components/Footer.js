import React, { Component } from 'react';
import '../Styles/Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div class="container-fluid" style={{marginTop : 50, backgroundColor : '#d3d3d3', padding : 40}}>
                <div class="row">
                    <div class="col-md-8">
                        <div class="well well-sm" style={{padding : 40}}>
                            <form>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">
                                                Name</label>
                                            <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email">
                                                Email Address</label>
                                            <div class="input-group">
                                                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span>
                                                </span>
                                                <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                        </div>
                                        <div class="form-group">
                                            <label for="subject">
                                                Subject</label>
                                            <select id="subject" name="subject" class="form-control" required="required">
                                                <option value="na" selected="">Choose One:</option>
                                                <option value="service">General Customer Service</option>
                                                <option value="suggestions">Suggestions</option>
                                                <option value="product">Product Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name">
                                                Message</label>
                                            <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button type="submit" class="btn btn-primary pull-right" id="btnContactUs">
                                            Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h3>About</h3>
                        <p>Star Wars is an American epic space opera media franchise, centered on a film series created by George Lucas. It depicts the adventures of characters "a long time ago in a galaxy far, far away"</p>
                    </div>
                </div>
            </div>
        );
    }
}



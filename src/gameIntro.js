import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Button} from 'react-bootstrap';

import './gameIntro.css';

class Intro extends Component {
    render() {
        return (
        <div className="backgroundImage">
                <h1 className="title">BINGO</h1>
                <div className="playButton">
                        <button type="button" className="btn btn-secondary btn-lg btn-block">Let's Play!</button>
                </div>
            </div>
        
        );
    }
}

export default Intro;

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


import './gameButtons.css';


class Buttons extends Component {
    render() {
        return(
            <div>
                <h1 className="display-4">Jugamos!</h1>
                <button id="right" type="button" className="btn btn-lg">Reset Card</button>
                <button id="left" type="button" className="btn btn-lg">New Game</button>
            </div>
        );
    }
}


export default Buttons;
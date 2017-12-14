import React, { Component } from 'react';
import ReactDom from 'react-dom';

import './gameButtons.css';


class Buttons extends Component {
    render(){
        return(
            <div>
                
                <header>
                    <button disabled name="reset">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                         Reset Card
                    </button>
                </header>

                <header>
                    <button name="new">
                    <i class="fa fa-th" aria-hidden="true"></i>
                        New Game
                    </button>
                </header>
            </div>
        );
    }
}


export default Buttons;
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Buttons from './gameButtons.js';

import './bingoBoard.css';

var words  = ['A', 'B', 'C', 'D', 'E',
              'A1', 'B2', 'C3', 'D4', 'E4',
              'Z', 'Y', 'X', 'W', 'U']

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}

shuffle(words);

class BingoBoard extends Component {
   
    constructor() {
        super()
        this.state = {

            words :  words
        }
    }



    render() {
        let rows = []
        for (let whereWeAre = 0; whereWeAre < this.state.words.length / 5; whereWeAre++) {
            rows.push(
                this.state.words.slice(
                    whereWeAre * 5, 
                    5*(whereWeAre + 1)).map(
                        (item) => <td>{item}</td>))
        }

        return(
            <div>
                <Buttons />
           
                <table className="tableMargin">
                    {rows.map((row) => <tr>{row}</tr>)}
                </table>
            </div>
        )
    }
}

export default BingoBoard;
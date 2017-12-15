import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Buttons from './gameButtons.js';

import './bingoBoard.css';


class BingoBoard extends Component {
    render() {
        return(
           

            <div>
                <Buttons />
               
                <table className="topMargin">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>    
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="center">DISNEY</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </table>
  


            
            
            
            
            
            
            
            </div>
        );
    }
}

export default BingoBoard;
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Buttons from './gameButtons.js';
import axios from 'axios'
import BingoBoxBack from  './bingoBoxBack.js';

import './bingoBoard.css';











function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}



class BingoBoard extends Component {
   
    constructor() {
        super()
        this.state = {
            words :  [],
            isFlipped: false,
            bgColor: "blue"
        }
    }

    chosenSquare = (event) => {
        var newColor = this.state.bgColor == 'blue' ? 'black' : "blue";
        this.setState({bgColor: newColor})
        
    }

    

    componentDidMount() {
        axios({
            method:'get',
            url: 'https://api.quizlet.com/2.0/sets/114271895/terms?client_id=AZZuzCtnSY',
            auth: {
                username: 'AZZuzCtnSY',
                password: 'GbERsZ3aDGyx7BPWuPnX5A'
            }
            
        }).then(({data}) => {
            var wordList =[];
            for(var i=0; i < data.length;i++){
                /* if(data[i].term){
                    console.log("UNDEFINED");
                } */
                wordList.push(data[i].term)
                console.log(data[i]);
                //console.log(wordList)
            }
            shuffle(wordList);
            this.setState({words: wordList})
        }); 
    }

    
  
  render() {

        let rows = []
                for (let whereWeAre = 0; whereWeAre < 25 / 5; whereWeAre++) {
                    rows.push(
                        this.state.words.slice(
                            whereWeAre * 5, 
                            5*(whereWeAre + 1)).map(
                                (item, index) => <td key={index} onClick = {this.chosenSquare.bind(this, index)} style={{background:this.state.bgColor}}>{item}</td>))
                }


        return(
            <div>
                <Buttons />
                <div>
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                </div>
                <div>
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                </div>
                <div>
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                </div>
                <div>
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                </div>
                <div>
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                    <BingoBoxBack />
                </div>
                <table className="tableMargin">
                    {rows.map((row) => <tr onClick={this.chosenSquare}>{row}</tr>)}
                </table>
            </div>
        )
    }
}

export default BingoBoard;
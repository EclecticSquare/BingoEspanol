import React, {Component} from 'react';
import axios from 'axios';
import BoxFront from './boxFront.js';


class BuildBoard extends Component  {
    constructor() {
        super();
        this.state = {
            words: [],
            isFlipped: false,
            bgcolor: 'purple'
        }
    }
    
    chosenSquare = (event) => {
        var count = this.state.words.map((index) => {
            var newColor = this.state.bgColor == 'purple' ? 'black' : 'purple';
            this.setState({bgColor: newColor})

        })
        
        
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
                wordList.push(data[i].term)
            }
            shuffle(wordList);
            this.setState({words: wordList})
        }); 
    }

    render() {
        console.log(this.state.words)
        
        var rowsJSX = this.state.words.map( (word, index) => {
           console.log(index)
           
           return <BoxFront word={word} 
                            key={index}
                            style={{background:this.state.bgColor}} 
                            select={this.chosenSquare.bind(this, index)}/>
        
        } ) 


        return (
            <div>
                < div>
                {rowsJSX.slice(0,5)}
                </div>
                
                <div> 
                {rowsJSX.slice(5,10)}
                </div>

                <div>
                {rowsJSX.slice(10,15)}   
                </div>

                <div>
                {rowsJSX.slice(15,20)}       
                </div>

                <div>
                {rowsJSX.slice(20,25)}       
                </div>

            </div>)
            
            
        
    }
}

export default BuildBoard;


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
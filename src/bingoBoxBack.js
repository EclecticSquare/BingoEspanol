import React, {Component} from 'react';
import './bingoBoxBack.css';
import image from './bingoBack.jpg'


class BingoBoxBack extends Component {
    render() {
        return (
            <div className='BingoBoxBack'>
                <img src={image} />
            </div>
        )
    }
}

export default BingoBoxBack;
import React, {Component} from 'react';
import './boxFront.css'

class BoxFront extends Component {
    render(){
        return(
            <div className='BoxFront'>
                {this.props.word}
            </div>
        )
    }
}


export default BoxFront;
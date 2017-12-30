import React, {Component} from 'react';
import './boxFront.css'




class BoxFront extends Component {
  


    render() {
        
    


        return(
            <div className={'BoxFront'} style={this.props.style} onClick = {this.props.select}>
                {this.props.word}
            </div>
        )
    }
}


export default BoxFront;
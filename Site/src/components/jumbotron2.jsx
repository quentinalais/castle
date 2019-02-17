import React, { Component } from 'react';
import './jumbotron2.css';

class Jumbotron2 extends Component{
    render(){
        return(
            <div className="jumbotron2 jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3" >{this.props.title}</h1>

                
                </div>
            
            </div>
        );
    }
}

export default Jumbotron2 ; 
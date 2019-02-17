import React, { Component } from 'react';
import './jumbotron3.css';

class Jumbotron3 extends Component{
    render(){
        return(
            <div className="jumbotron3 jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3" >{this.props.title}</h1>

                
                </div>
            
            </div>
        );
    }
}

export default Jumbotron3 ; 
import React, { Component } from 'react';
import './TrameR.css';


class TrameR extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.props.nom}</td>
                        <td>{this.props.etoile}</td>
                        
                    </tr>
                </tbody>


            </table>
        );
    }
}

export default TrameR; 
import React, { Component } from 'react';
import './Trame.css';


class Trame extends Component {
    render() {
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.props.nom}</td>
                        <td>{this.props.chef}</td>
                        <td>{this.props.lien}</td>
                    </tr>
                </tbody>


            </table>
        );
    }
}

export default Trame; 
import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron2 from '../components/jumbotron2.jsx';
import Trame from '../components/Trame.jsx';

import './Home.css';

var json = require('../sample.json');
console.log("Taille json"+json[0].nom_chateau)

class Hotel extends Component {

    constructor() {
        super();
        this.state = json;
    }

    render() {
        
        function affichage() {
            let liste = []
            for (let k = 0;k< json.length; k++) {
                let nomchateau = json[k].nom_chateau
                let nomchef = json[k].nom_chef
                let urichateau = json[k].url_chateau
                liste.push(
                    <tr>
                        <th scope="row">{k+1} </th>
                        <td>{nomchateau}</td>
                        <td>{nomchef}</td>
                        <td>
                            <a href={urichateau}>Site</a>
                        </td>
                    </tr>
                )

                
            }
            return liste
            
        }


        let finale=affichage();
        console.log(finale)
        

        return (
            <div>
                <Navbar />
                <Jumbotron2 title="Hotels" />
                <div className="container">
                    <h3> Besoin de repos ?  </h3>
   </div>

                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom Hotel</th>
                                <th scope="col">Chef</th>
                                <th scope="col">Site</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            {finale}
                            
                        </tbody>
                    </table>
                    

                </div>

            </div>
        )
    }
}

export default Hotel; 
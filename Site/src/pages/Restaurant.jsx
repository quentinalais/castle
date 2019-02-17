import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron3 from '../components/jumbotron3.jsx';

import './Restaurant.css';

var data=require('../michelin_repare.json');

console.log("../"+data[5].path_photo)

class Restaurant extends Component {

    constructor() {
        super();
        this.state = data;
    }

    render() {

        function affichage() {
            let liste = []
            for (let k = 0;k< data.length; k++) {
                let nom_restaurant = data[k].nom_restaurant
                let etoile= data[k].etoile
                let description=data[k].decscription
                let photo="../"+data[k].path_photo
                console.log(photo)
                liste.push(
                    <tr>
                        <th scope="row">{k+1} </th>
                        <td>{nom_restaurant}</td>
                        <td>{description}</td>
                        <td>{etoile}</td>
                        <td>
                            <img src={photo}>
                            
                            
                            </img>
                        </td>

                      
                    </tr>
                )

                
            }
            return liste
            
        }

        let finale=affichage();


        return (
            <div>
                <Navbar/>
                <Jumbotron3 title="Restaurant" />
                <div className="container">
                    <h3> Une petite faim ?  </h3>
                 </div>
                <div>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom Restaurant</th>
                                <th scope="col">Description </th>
                                <th scope="col">Etoile</th>
                                <th scope="col">Photo</th>
                               
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

export default Restaurant; 
import React, { Component } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/jumbotron.jsx';
import '../components/jumbotron.css';
import '../components/Footer.css';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Jumbotron title="Rest'N Go"/>
                <div className="container">
                    <h3> Bienvenue </h3>

                    <p> Ce site a été réalisé dans le cadre d'un projet dans un cours de Web architecture.</p>
                    <p> L'objectif est de récuperer des informations provenant de deux sites différents : Relais et chateu et le Guide Michelin.</p>
                    <p> Après récuperation des données ce site a pour but de faciliter l'experience utilisateur en lui permettant de savoir si son établissement dispose d'un restanrant étoilé ou non. </p>
                    <h4> </h4>
                     </div>
                
            </div>
        )
    }
}

export default Home; 
import React from 'react';
import '../styles/heroShop.css';
import PropTypes from 'prop-types';
import bg_1 from '../assets/bg/bg_1.png';


const HeroShop = ({titre, name, age}) => {
  //const titre = props.titre;
  //const name = props.name;
  //<img src={bg_1} alt="Fond Batman" className="backgroundBatman1"></img>
  //<div className="hero-image">
  return (
    <>
        <img src={bg_1} alt="Fond Batman" className="backgroundBatman1"></img>
        <div id="hero">
                <div className="container">
                <h1 className="hero-title text-uppercase">Recuperez le flow de <br/> Batman avec notre Eshop!</h1>
                </div>
           
        </div>
    
    </>
  )
}


export default HeroShop;
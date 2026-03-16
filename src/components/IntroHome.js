import React from 'react';
import '../styles/introHome.css';
import fondBatman from '../assets/Illustrations/Bathome1.png';
import logoFlecheHautBat from '../assets/logos/logo_bat_flèche.png';
import logoFacebook from '../assets/logos/icon_facebook.png';
import logoInstagram from '../assets/logos/icon_ig.png';
import logoTwitter from '../assets/logos/icon_tw.png';
import logoFlecheBasBat from '../assets/logos/logo_bat_flèche_2.png';
import logoFlecheBas from '../assets/logos/flèche_down_header.png';
import NavBar from '../components/NavBar';

function IntroHome() {
  return (
    <>
    <img src={fondBatman} alt="Fond Batman" className="backgroundBatman"></img>
    <div className="Intro">
        <div className="Introduction" id="introduction">
            <p>Au nom de ses parents assassinés, Bruce Wayne mène<br />une guerre éternelle contre les criminels de Gotham City.<br />Il est vengeur. Il est la nuit.
            <br /><strong>Il est Batman.</strong></p>
        </div>

        <div className="boutonBody">
            <button className="bouton" type="button"><a href="#batmanAuCinema">VOIR LE HEROS</a></button>
            <button className="bouton ms-5" type="button"><a href="#nemesis">LES ADVERSAIRES</a></button>
        </div>
    </div>

    <div className="social">
        <a href="NavBar"><img src={logoFlecheHautBat} alt="Flèche haut Batman" title="Vers haut de la page"></img></a>
        <div className="icon"><a href="https://www.facebook.com"><img src={logoFacebook} alt="icon Facebook" title="Page Facebook"></img></a></div>
        <div className="icon"><a href="https://www.instagram.com"><img src={logoInstagram} alt="icon Instagram" title="Page Instagram"></img></a></div>
        <div className="icon"><a href="https://www.twitter.com"><img src={logoTwitter} alt="icon Twitter" title="Page Twitter"></img></a></div>
        <a href="#introduction"><img src={logoFlecheBasBat} alt="flèche bas Batman" title="Vers bas de la page"></img></a>
	</div>

    <a href="#batmanAuCinema" className="flecheBas"><img src={logoFlecheBas} alt="flèche bas vers contenus"></img></a>	
    </>
  )
}

export default IntroHome;
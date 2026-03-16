import React from 'react';
import '../styles/bodyHome.css';
import batHome2 from '../assets/Illustrations/Bathome2.png';
import batHome3 from '../assets/Illustrations/Bathome3.png';
import batHome4 from '../assets/Illustrations/Bathome4.png';
import tn_robertpattinson from '../assets/Illustrations/tn_robertPattinson.png';
import tn_ChristianBale from '../assets/Illustrations/tn_ChristianBale.png';
import tn_BenAffleck from '../assets/Illustrations/tn_BenAffleck.png';
import batHome13 from '../assets/Illustrations/Bathome13.png';
import batHome12 from '../assets/Illustrations/Bathome12.png';
import batHome5 from '../assets/Illustrations/Bathome5.png';
import batHome6 from '../assets/Illustrations/Bathome6.png';
import batHome7 from '../assets/Illustrations/Bathome7.png';
import tn_PaulDano from '../assets/Illustrations/tn_PaulDano.png';
import tn_heathLeadger from '../assets/Illustrations/tn_heathLeadger.png';
import tn_RayPorter from '../assets/Illustrations/tn_RayPorter.png';
import bathome9 from '../assets/Illustrations/Bathome9.png';
import bathome8 from '../assets/Illustrations/Bathome8.png';
import bathome10 from '../assets/Illustrations/Bathome10.png';
import tn_MichaelCain from '../assets/Illustrations/tn_MichaelCain.png';
import tn_ZoeKravitz from '../assets/Illustrations/tn_ZoeKravitz.png';
import tn_James_Gordon from '../assets/Illustrations/tn_James_Gordon.png';
import bathome14 from '../assets/Illustrations/Bathome14.jpg';
import Bathome_ba1 from '../assets/Illustrations/Bathome_ba1.png';
import icon_flèche_1 from '../assets/logos/icon_flèche_1.png';
import icon_flèche_2 from '../assets/logos/icon_flèche_2.png';
import Bathome_ba2 from '../assets/Illustrations/Bathome_ba2.png';
import icon_guillemets_1 from '../assets/logos/icon_guillemets_1.png';
import icon_guillemets_2 from '../assets/logos/icon_guillemets_2.png';




function BodyHome() {
  return (
    <>
    <section id="batmanAuCinema" className="batmanAuCinema">
		<h1>BATMAN AU CINEMA</h1>
		<p className="texte_1">Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par le
			dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le
			comic book Detective Comics en 1939. Batman se différencie de Superman, alors héros
			majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943
			par Lewis Wilson et bénéficiera de nombr/eux reboot, donnant l’occasion à de multiples
			acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :</p>

		<div  className="illustrations">
			<div className="image">
				<img src={batHome2} alt="Robert Pattinson (2022)" title="Batman 1"></img>
				<div className="nomActeur1">
					<p className="noms">Robert Pattinson<br/><strong>2022</strong></p>
					<img src={tn_robertpattinson} alt="Robert Pattinson" ></img>
				</div>
			</div>
			<div className="image">	
				<img src={batHome3} alt="Christian Bale (2006 - 2008 - 2012)"></img>
				<div className="nomActeur2">
					<p className="noms">Christian Bale<br/><strong>2006 - 2008 - 2012</strong></p>
					<img src={tn_ChristianBale} alt="Christian Bale"></img>
				</div>
			</div>
			<div className="image">
				<img src={batHome4} alt="Ben Affleck 2016- 2017/2020 – 2023"></img>
					<div className="nomActeur3">
					    <p className="noms">Ben Affleck<br/><strong>2016-2017/2020–2023</strong></p>
					    <img src={tn_BenAffleck} alt="Ben Affleck"></img>
					</div>
				</div>
			</div>
	</section>


    <img src={batHome13} alt="Shuriken de Batman" title="Shuriken de Batman" className="imageShuriken"></img>

    <img src={batHome12} alt="Batman sur le côté" title="Batman sur le côté" className="batmanCote"></img>



	<section id="nemesis" className="nemesis">
			<h1>NÉMÉSIS</h1>
			<p className="texte_1">Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la plupart
				du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou
				psychopathes. Avec son introduction dans la Justice League il aura l’occasion de
				se mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les
				derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :</p>

			<div className="illustrations2">
				<div className="image">
					<img src={batHome5} alt="The Riddler - Paul Dano (2022)"/>
					<div className="nomAdversaire1">
						<p className="noms">The Riddler-Paul Dano<br/><strong>2022</strong></p>
						<img src={tn_PaulDano} alt="Paul Dano"/>
					</div>
				</div>
				<div class="image">
					<img src={batHome6} alt="Le Joker - Heath Ledger (2008)"/>
					<div className="nomAdversaire2">
						<p className="noms">Le Joker-Heath Ledger<br/><strong>2008</strong></p>
						<img src={tn_heathLeadger} alt="Heath Ledger"/>
					</div>
				</div>
				<div className="image">
					<img src={batHome7} alt="Darkseid - Ray Porter (2022)"/>
					<div className="nomAdversaire3">
						<p className="noms">Darkseid-Ray Porter<br/><strong>2022</strong></p>
						<img src={tn_RayPorter} alt="Ray Porter"/>
					</div>
				</div>
			</div><br/><br/>
		</section>


		<section id="allies" class="allies">
			<h1>ALLIÉS</h1>
			<p class="texte_1">Alfred est le majordome des Wayne. A leur mort il s’occupe de l’éducation du jeune Bruce
				avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le
				premier numéro des aventures de l’homme chauve-souris en 1940. Tantôt ennemie tantôt
				alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la
				police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi
				nettoyer sa ville de la criminalité qui y règne.</p>

			<div class="illustrations3">
				<div class="image">
					<img src={bathome9} alt="Alfred Pennyworth - Michael Cain (2006 - 2008 - 2012)"/>
					<div class="nomAllies1">
						<p class="noms">Michael Cain<br/><strong>2006 - 2008 - 2012</strong></p>
						<img src={tn_MichaelCain} alt="Michael Cain"/>
					</div>
				</div>
				<div class="image">
					<img src={bathome8} alt="Catwoman - Zoé Kravitz (2008)"/><br/>
					<div class="nomAllies2">
						<p class="noms">Catwoman-Zoé Kravitz<br/><strong>2008</strong></p>
						<img src={tn_ZoeKravitz} alt="Zoé Kravitz"/>
					</div>
				</div>
				<div class="image">
					<img src={bathome10} alt="James Gordon (2014-2019)"/>
					<div class="nomAllies3">
						<p class="noms">James Gordon<br/><strong>2014-2019</strong></p>
						<img src={tn_James_Gordon} alt="James Gordon"/>
					</div>
				</div>
			</div><br/><br/>
		</section>


		<section id="justiceLeague" class="justiceLeague">
			<h1>JUSTICE LEAGUE</h1>
			<p className="texte_1">Lorsque la Terre est menacée les plus grands super-héros s’allient pour la protéger. Ils
				doivent cependant apprendre à se faire confiance mutuellement et à faire équipe ce qui
				ne sera pas chose aisée. Ensemble ils forment la Justice League, les plus grands super-
				héros de la Terre, ceux vers qui le monde entier se tourne lorsque les menaces
				extraterrestres ou surnaturelles menacent son existence.</p>
			
		</section>
		<img className="justiceLeaguePhoto" src={bathome14} alt="Justice League"/><br/>

		<section id="multimedia" class="multimedia">
			<h1>MULTIMÉDIA</h1>
			<div class="container illustrationsMultimedia">
				<div class="fleche1">
					<img src={icon_flèche_1} alt="flèche gauche"/>
				</div>

				<div class="batmanBeginsImage">
					<img src= {Bathome_ba1} alt="Batman begins"/>
				</div>
				<div class="affiche">
					<h2>ACTION, ADVENTURE</h2>
					<p class="nomAffiche">Batman begins</p>
					<div class="version">
						<p class="version1">IMDB :</p>
						<p class="version2"> 8.2</p>
					</div>
					<p class="texte_2">Le jeune Bruce Wayne assiste impuissant au meurtre de ses
						parents. Profondément traumatisé, il grandit obnubilé par un
						désir de vengeance. La Ligue des ombres, une secte de
						guerriers ninja dirigée par Ra's al Ghul, se chargera de son
						entraînement. De retour chez lui à Gotham, avec l'aide de son
						majordome Alfred Pennyworth, Bruce Wayne se lance alors
						dans la lutte contre le crime sous le nom de Batman.</p>
				</div>
				<div class="fleche2">
					<img src={icon_flèche_2} alt="flèche droite"/>

				</div>
			</div>
			 <div class="video">
				<a href="https://www.youtube.com/watch?v=jXrFsn9pcZY"><img src={Bathome_ba2} alt="Bande annonce nouveau film"
					title="Cliquer pour voir la bande annonce"/></a>

			</div>
		</section>

		<section id="contact" class="contact">
			<h1 className="titreContact">PRENONS CONTACT</h1>
			
				<label htmlFor="email" class="noms">ADRESSE EMAIL</label><br/><br/>
				<input type="email"	name="email" placeholder="Adresse email" class="input" required/><br/><br/>

				<label htmlFor="newsletter" className="noms">NEWSLETTER</label><br/><br/>
				<label className="check">En cochant cette case vous acceptez de recevoir l’actualité concernant les aventures de Batman :</label>
				<input type="checkbox"/>

				<div className="choix">
					
					<label htmlFor="choix"></label>
					<select name="choix" id="choix">
						<option>Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter</option>
						<option>Tous les jours</option>
						<option>Une fois par semaine</option>
						<option>Une fois tous les deux semaines</option>
						<option>Une fois par mois</option>
						<option>Une fois tous les 3 mois</option>
					</select>
				</div>

				<div className="news">
					<div className="newsText">Souhaitez-vous recevoir des news</div>
					<div className="boutonNews">
						<button className="btn" type="button"><a type="button" href="index.html">Des films</a></button>
						<button className="btn" type="button"><a type="button" value="Des comics" href="index.html">Des comics</a></button>
						<button className="btn" type="button"><a type="button" value="De tout" href="index.html">De tout</a></button>
					</div>
				</div>

				<label htmlFor="message" className="noms">MESSAGE</label><br/><br/>
				<input type="text"	name="message" className="input" placeholder="Laissez un commentaire pour la communauté" required/><br/>
				<button className="confirmer" type="button" id="open">CONFIRMER</button>	
		

			<div className="fond" id="popup">
				<span className="close" id="close">&times;</span>
				<p>MESSAGE RECU!</p>
			</div>
			
		</section>

		<section id="citation"  class="citation">
			<div class="guillemet1">
				<div class="ouvert">
					<img src={icon_guillemets_1} alt="Guillement ouvert"/>
				</div>
				<br/>
				<div class="ouvertTexte">
					<p>La seule façon raisonnable de vivre en ce bas monde, <br/> c'est en dehors des règles.</p>
				</div>
			</div>
			<br/>
			<div class="guillemet2">
				<div class="fermeTexte">
					<p>The Dark Knight : Le Chevalier Noir - <br/> Le Joker à Batman (2008)</p>
				</div>
				<div class="ferme">
					<img src={icon_guillemets_2} alt="Guillement fermé"/>
				</div>
			</div>
		</section>

    </>
  )
}

export default BodyHome;
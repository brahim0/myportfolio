import React, { Component } from 'react';
import brahim from './img/brahim.PNG';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
import Langue from './langue';
export default class Resume extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 mx-2  col-md-6 col-lg-4 my-3">
          <img src={brahim} alt="Ma photo" className="img-thumbnail img-landing-page" />
          <h2 className="text-capitalize">Brahim hmida</h2>
          <h4 className="text-capitalize">Full stack developer</h4>
          <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          <h5>Address</h5>
          <p>48 Rue hssan nourie menzel jmil bizerte 7080</p>
          <h5>Phone</h5>
          <p>(+216)53727298</p>
          <h5>Email</h5>
          <p>brahim470@gmail.com</p>
        </div>
        <div className="col-9 mx-2  col-md-6 col-lg-4 my-3"  >
         <h1>Education</h1>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Education year="2013" level ="Baccalauréat Mathématiques (Moyenne : 12.70)" />
         <Education year="2014" level="Faculté des Sciences de Bizerte (FSB).
1ère année : (Moyenne : 11.27)" />
         <Education year ="2016" level="Faculté des Sciences de Bizerte (FSB).
2ème année : (Moyenne : 10.87)" />
         <Education year="2017" level="Faculté des Sciences de Bizerte (FSB).
3ème année : (Moyenne : 11.56 | Note PFE : 15.95)" />
          <h1>Experience</h1>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Experience date="30 Jan 2017 - 25 Mai 2017" description="Projet de fin d'études, chez ARAB SOFT" />
         <Experience date="05 Fev 2018 - 04 Mai 2018 " description="ALLIANCE DESIGN, Secteur : Informatique
Poste occupé : Développeur Informatique (stage)" />
         <Experience date="03 Sept 2018 - 07 Jan 2019" description="Poste occupé : Développeur Informatique" />
         <h1>Competences Techniques</h1>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Skill domaine='Langages' sousdomaine="C, VB.NET, C#, Java, php5, php7"  />
       <Skill domaine='Web' sousdomaine="ASP.Net MVC, HTML, CSS, BootStrap, JavaScript , Jquery , JqueryUI, Vue.js"  />
       <Skill domaine='Framework' sousdomaine="Symfony(2.5,3.2,3.4), Laravel(5.2,5.3,5.5,5.6,5.7) ,Angular(2,7), React"  />
       <Skill domaine='Méthodologies' sousdomaine="UML, Scrum"  />
       <Skill domaine='Outils de conception' sousdomaine="tarUML"  />
       <Skill domaine='SGBD' sousdomaine="StarUML"  />
       <Skill domaine='IDE' sousdomaine="Eclipse , Android Studio , Visual Studio"  />
       <Skill domaine='System d’exploitation' sousdomaine="Linux ( Ubuntu 14.04 , Ubuntu 16.04) , Windows"  />
       <h1>Langues</h1>
         <hr style={{ borderTop: '2px solid #e22947' }} />
         <Langue langue="Arabe" progress={100} />
       <Langue langue="Français" progress={70} />
       <Langue langue="Anglais" progress={70} />
       
        </div>

      </div>
    )
  }
}

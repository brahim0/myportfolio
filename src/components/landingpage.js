import React, { Component } from 'react'
import brahim from './img/brahim.PNG';
export default class Landingpage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4 mx-2  col-md-6 col-lg-4 my-3">
<img src={brahim} alt="Ma photo" className="img-thumbnail img-landing-page" />
        </div>
        <div className="col-8 mx-2 col-md-6 col-lg-4 my-3 ">
<h1 className="text-capitalize h1 mx-2">Full stack developper</h1>
<ul class="list-group">
  <li class="list-group-item text-capitalize"><h3> &#60; 1 ans d'experience</h3></li>
  <li class="list-group-item text-capitalize"><h3>bac+3 Licence fondamentale en informatique</h3></li>
  <li class="list-group-item text-capitalize"><h3>Diplomé de la faculté des sciences de bizerte</h3></li>
</ul>
<ul className="social-links">
<li className="li-social-links"><a href="https://www.facebook.com/profile.php?id=100010684601743" target="_blank" ><i className="fab fa-facebook-f"></i></a></li>
<li className="li-social-links"><a href="https://www.linkedin.com/in/brahim-hmida-760899125/" target="_blank"  ><i className="fab fa-linkedin-in"></i></a></li>
<li className="li-social-links"><a href="https://www.instagram.com/brahimhm16/" target="_blank"  ><i className="fab fa-instagram"></i></a></li>

</ul>

        </div>
      </div>
    )
  }
}

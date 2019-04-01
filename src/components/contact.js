import React, { Component } from 'react'
import brahim from './img/brahim.PNG';
export default class Contact extends Component {
  render() {
    return (
      <div className="row">
              <div className="col-4 mx-2  col-md-6 col-lg-4 my-3">
              <img src={brahim} alt="Ma photo" className="img-thumbnail img-landing-page" />

</div>
<div className="col-8 mx-2 col-md-6 col-lg-4 my-3 ">
<h1 className="text-capitalize h1 mx-2">Contact ME</h1>
<ul class="list-group">
  <li class="list-group-item text-capitalize"><h3> <i class="fas fa-phone"></i> (+216)53727298</h3></li>
  <li class="list-group-item"><h3><i class="far fa-envelope"></i> brahimhm470@gmail.com</h3></li>
  <li class="list-group-item text-capitalize"><h3><i class="fas fa-home"></i> 48 Rue Hssan Nourie Menzel Jemil Bizerte</h3></li>
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

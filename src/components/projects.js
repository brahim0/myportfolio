import React, { Component } from 'react'
import {Tabs,Tab} from 'react-mdl';
import bluepens from './img/bluepens.jpg';
import laravel from './img/laravel.png';
import arabsoft from './img/arabsoft.png';
export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }
   
    toggleProjects=()=>{
        if(this.state.activeTab===0){
            return (
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                <img src={arabsoft} className="img-thumbnail project-img" style={{height:"14rem"}} alt="recipe" />
                <div className="card-body text-capitalize">
                <h6>ArabSoft project</h6>
                <h6 className="text-slanted">
                Encadré par Mr Bahri Hamouda
                </h6>
                </div>
                <div className="card-footer">
                <button type="button" className="btn btn-success text-capitalize" >Details</button>
                </div>
                </div>
                </div>
            )
        }
        if(this.state.activeTab===1){
            return (
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                <img src={laravel} className="img-thumbnail project-img" style={{height:"14rem"}} alt="recipe" />
                <div className="card-body text-capitalize">
                <h6>Alliance design project</h6>
                <h6 className="text-slanted">
                Encadré par Mr Mehdi
                </h6>
                </div>
                <div className="card-footer">
                <button type="button" className="btn btn-success text-capitalize" >Details</button>
                </div>
                </div>
                </div>
            )
        }
        if(this.state.activeTab===2){
            return (
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                <img src={bluepens} className="img-thumbnail project-img" style={{height:"14rem"}} alt="recipe" />
                <div className="card-body text-capitalize">
                <h6>Bluepens project</h6>
                <h6 className="text-slanted">
                Encadré par Mr Chaibi Ala
                </h6>
                </div>
                <div className="card-footer">
                <button type="button" className="btn btn-success text-capitalize" >Details</button>
                </div>
                </div>
                </div>
            )
        }
    }
   
   
  render() {
    var activeStyle = {
		backgroundColor: '#65AF99'
    }
    var inactiveStyle = {
		backgroundColor: '#6568AF'
    }


    
    return (
       
        <div className="demo-tabs">
        <Tabs activeTab={this.state.activeTab} 
            
         onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab className="tab-title" style={
                this.state.activeTab===0 ? activeStyle : inactiveStyle
            }    >Projet PFE</Tab>
            <Tab className="tab-title" style={
                this.state.activeTab===1 ? activeStyle : inactiveStyle
            } >Stage en Laravel</Tab>
            <Tab className="tab-title"style={
                this.state.activeTab===2 ? activeStyle : inactiveStyle
            }  >Premier Contrat Professionel</Tab>
        </Tabs>
        <section>
            <div className="content">Content for the tab: {this.toggleProjects()}</div>
        </section>
    </div>    
    )
  }
}

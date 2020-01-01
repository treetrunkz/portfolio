

import React, { Component } from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
       
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Who's this Lady?</h2>

               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">
                  <p className="address">
       						<span>{resumeData.name}</span>
       						   <span>
                     {resumeData.address}
                    </span>

                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
      </div>
      <div align="center" className="columns" id="cols">
      

      </div>
      </section>
    );
  }
}
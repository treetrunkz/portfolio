import React, { Component } from 'react';
import  { ScrollRotate } from 'react-scroll-rotate';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact"> 
        <div style={{ width: '100%'}}>
        <div style={{marginRight: '45%', marginLeft: '45%'}}>
        <ScrollRotate><img src="images/gear.png" alt="" /></ScrollRotate>
              <p style={{ textAlign: "center", marginRight: '10%', marginLeft: '10%'}} className="lead">
              <br></br>Let's work together on your next project.
              </p>
            </div>

          </div>        
        </section>
        );
  }
}
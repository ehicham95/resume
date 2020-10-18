import React, { Component } from 'react';
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

               <h2>{resumeData.about}</h2>
               <p>
               {
                 resumeData.aboutme
               } <a href={resumeData.socialLinks[1].url} target="_blank" rel="noopener noreferrer">Github</a>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>{resumeData.contactDetails}</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

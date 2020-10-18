import React, { Component } from 'react';
import ExperienceDetails from './experienceDetails';
export default  class Resume extends Component {

  state = { show: [], index: -1 }

  showModal = (i) => {
    this.setState({ index: i});
    const newIds = this.state.show //copy the array
    newIds[i] = true; //execute the manipulations
    this.setState({show: newIds, index: -1});
  }
  
  hideModal = () => {
    let tmp = [];
    for (var ii = 0; ii < 3; ii++) {
      tmp[ii] = false;
    }
    this.setState({show: tmp, index: -1});
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>{resumeData.diploma}</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, index)=>{
                  return(
                    <div key={item.UniversityName + index} className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p style={{fontWeight: "bolder"}}>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>{resumeData.experiences}</span></h1>
            </div>

            <div if="work" className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, index) => {
                  return(
                    <div key={item.CompanyName + index} className="row item" >{/*onClick={() => this.showModal(index)}*/}
                       <div className="twelve columns">
                          <h3><img src={`images/institute/${item.image}`} alt={`${item.alt}`}/>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}<br/>
                           <em className="date">
                            {item.MonthOfStarting} {item.YearOfStarting} <span>&ndash;</span>
                            {item.MonthOfLeaving} {item.YearOfLeaving}</em>
                          </p>
                          <p>
                            <span style={{fontWeight: "bold"}}>{resumeData.context}:</span> {item.Context}
                          </p>
                          <p>
                              <span style={{fontWeight: "bold"}}>Technologies</span>: {item.technologies}<br/>
                          <span className="details" onClick={() => this.showModal(index)}>
                            {resumeData.task}
                          </span>
                          </p>
                          <ExperienceDetails
                            show={this.state.show[index]} handleClose={() => this.hideModal()} 
                            index={this.state.index} achievements={item.Achievements}
                            close={resumeData.close}
                          />
                       </div>
                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>{resumeData.skill}</span></h1>
            </div>

            <div className="nine columns main-col">


   				   <div style={{display: "flex"}}>
                {
                  resumeData.skills && resumeData.skills.map((item, index) => {
                    return(
                      <div style={{ float: "left", width: "33%", margin: "10px", backgroundColor: "#eeeeeeb0"}} key={Object.keys(item)}>
                        <div style={{marginLeft: "5%"}}>
                          <em style={{fontWeight: "bolder"}}>{Object.keys(item)}</em>
                        </div>
                        <div style={{marginLeft: "5%"}}>
                          <ul>
                            {
                              Object.values(item)[0] && Object.values(item)[0].map((s, i) => {
                              return <li key={s + i}><span>&bull;</span> {Object.values(item)[0][i]}</li>
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    )
                  })
                }

   					</div>

   			</div>

         </div>

      </section>
    );
  }
}

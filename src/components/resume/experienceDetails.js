import React, { Component } from 'react';
import resumeData from '../../data/resumeData';
export default  class ExperienceDetails extends Component {

    handleClose = (i) => {
        this.props.handleClose();
    }

    render() {
        const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';
        const index = this.props.index;
        const close = this.props.close;
        let achievements = this.props.achievements;
        return (
            <div className={showHideClassName} style={{animationName: "slideIn", animationDuration: "1s"}}>
                <div className='modal-main' style={{minWidth: "400px", borderRadius: "2%"}}>
                    <div className='released-task'>{resumeData.taskrealeased} :</div>
                    <div className=" columns main-col">
                        {
                            achievements && achievements.map((item, i) => {
                                return(
                                    <div key={"achievement" + index + i} className="row item">
                                        <div className="twelve columns">
                                            <p className="info" style={{textAlign: "left"}}>
                                                <span>&bull;</span>
                                                <span>
                                                    <em className="date">{item}</em>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className='close-button' onClick={() => this.handleClose(index)}>
                        {close}
                    </button>
                </div>
            </div>
        );
    }
    
}

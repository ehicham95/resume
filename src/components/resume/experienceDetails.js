import React, { Component } from 'react';
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
            <div className={showHideClassName}>
                <div className='modal-main'>
                    <div className='released-task'>Tâche réalisées :</div>
                    <div className=" columns main-col">
                        {
                            achievements && achievements.map((item, i) => {
                                return(
                                    <div key={"achievement" + index + i} className="row item">
                                        <div className="twelve columns">
                                            <p className="info">
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

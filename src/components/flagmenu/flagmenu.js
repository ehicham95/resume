import React, { Component } from 'react';
import App from '../../App';

export default class FlagMenu extends Component {

    render() {
      let resumeData = this.props.resumeData;

      return (
        <div className="dropdown">
            <a href={App.url + resumeData.flags[0].link}>
                <img src={`images/flags/${resumeData.flags[0].flag}32.png`} alt={resumeData.flags[0].alt} />
            </a>
            <div className="dropdown-content" onClick={this.handleLangChange}>
                <a href={App.url + resumeData.flags[1].link}>
                    <img src={`images/flags/${resumeData.flags[1].flag}32.png`} alt={resumeData.flags[1].alt} />
                </a>
            </div>
        </div>
      )
    }
  }
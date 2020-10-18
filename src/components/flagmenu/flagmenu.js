import React, { Component } from 'react';
import App from '../../App';

export default class FlagMenu extends Component {

    render() {
      let resumeData = this.props.resumeData;

      return (
        <div>
            <a href={App.url + resumeData.flags[1].link}>
                <img src={`images/flags/${resumeData.flags[1].flag}32.png`} alt={resumeData.flags[1].alt} />
            </a>
        </div>
      )
    }
  }
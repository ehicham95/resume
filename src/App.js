import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
//import Portfolio from './components/portfolio/portfolio';
//import Testimonials from  './components/testimonials/testimonials';
//import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './data/resumeData';
import resumeDataFrench from './data/resumeDataFrench';

class App extends Component {

  static url = window.location.origin + "/portfolio/";

  render() {
    var url = window.location.href.includes("en");
    let data;
    if (url === true) data = resumeData;
    else data = resumeDataFrench;
    return (
      <div className="App">
        <Header resumeData={data}/>
        <About resumeData={data}/>
        <Resume resumeData={data}/>
        {/*<Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={data}/>*/}
        <Footer resumeData={data}/>
      </div>
    );
  }
}

export default App;

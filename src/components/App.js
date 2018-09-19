import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Component} from 'react';
import './App.css';
import Heading from './NavBar/Header';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Awards from './Awards/Awards';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import About from './About/About';

import data from '../data/data.json';


class App extends Component {


  render() {
    return (
      <div className = "" >
      <Heading data = { data.basics }/>
      <About data = {data}/>  
      <Experience data = {data}/>  
      <Skills skills = {data.skills}/>  
      <Portfolio projects = {data.projects}/> 
      <Awards awards = {data.awards}/>  
      <Contact data = {data}/>  
      <Footer data = {data}/> 
    </div >
    );
  }
}

export default App;

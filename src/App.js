
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/Home.css';  

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;

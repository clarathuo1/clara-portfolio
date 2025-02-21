import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home">
      <h1>Hi, I'm Clara Thuo!</h1>
      <p>Welcome to my portfolio!</p>
      <p>I'm a web developer passionate about building great user experiences.</p>
      
      {/* Add the image directly */}
      <img src="/mwihaki.jpeg" alt="Clara Thuo" className="profile-image" />
    </section>
  );
};

export default Home;

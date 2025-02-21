import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

// Array of skills data with categories, skills, and associated Font Awesome icons
const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Redux'],
    icons: ['react', 'html5', 'css3-alt', 'js-square', 'redux']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'MySQL'],
    icons: ['node', 'node', 'database', 'database']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'Figma', 'VS Code', 'NPM'],
    icons: ['git', 'docker', 'figma', 'code', 'npm']
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0 }}   
            animate={{ opacity: 1 }}   
            transition={{ duration: 1 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}  
          >
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.skills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  className="skill-item"
                  initial={{ opacity: 0, x: -100 }} // Start with items off-screen
                  animate={{ opacity: 1, x: 0 }} // Slide in and fade in
                  transition={{ duration: 0.5, delay: idx * 0.2 }} // Staggered animation
                >
                  {/* Dynamically render Font Awesome icons */}
                  <i className={`fab fa-${skillCategory.icons[idx]} skill-icon`} />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

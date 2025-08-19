import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero() {
  const [darkMode, setDarkMode] = useState(true);

  // Toggle between dark and light mode for better viewing experience
  // Click the button to switch themes instantly!
  const [gradientMode, setGradientMode] = useState(false);

  return (
    <div className={darkMode ? 'hero dark' : 'hero light'}>
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((d) => !d)}
        aria-label="Toggle dark/light mode"
        title="Switch between dark and light mode for better readability"
      >
        {darkMode ? '🌞SWITH' : '🌙SWICTH'}
      </button>
      <button
        className="toggle-gradient"
        onClick={() => setGradientMode((g) => !g)}
        aria-label="Toggle gradient mode"
        title="Switch gradient mode"
        style={{ marginLeft: 12 }}
      >
        {gradientMode ? '🌈 Gradient ON' : '🎨 Gradient OFF'}
      </button>
      <motion.div
        className="profile-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="profile-info">
          <h1>
            <span
              className={gradientMode ? 'gradient-text active' : 'gradient-text'}
              style={{
                color: gradientMode ? 'linear-gradient(90deg, #ff8a00, #e52e71)' : undefined,
                background: gradientMode
                  ? 'linear-gradient(90deg, #ff8a00, #e52e71)'
                  : undefined,
                WebkitBackgroundClip: gradientMode ? 'text' : undefined,
                WebkitTextFillColor: gradientMode ? 'transparent' : undefined,
                transition: 'all 0.3s'
              }}
            >
              {gradientMode ? 'Japhet (Gradient Mode)' : 'Japhet'}
            </span>
            <span className="robot-emoji" role="img" aria-label="robot">
              <motion.span
                animate={{
                  rotate: [0, 20, -20, 20, 0],
                  x: [0, 5, -5, 5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: 'easeInOut',
                }}
                style={{ display: 'inline-block' }}
              >
                🤖
              </motion.span>
            </span>
            <span className="wave-emoji" role="img" aria-label="waving hand" style={{ marginLeft: 8 }}>
              👋
            </span>
          </h1>
          <p className="subtitle">
            {gradientMode
              ? 'Gradient Mode: Vibrant Full Stack Developer | UI/UX Enthusiast'
              : 'Full Stack Developer | UI/UX Enthusiast'}
          </p>
          <div className="hero-actions">
            <Link to="/polifolio" className="hero-btn">
              View Portfolio
            </Link>
            <Link to="/contact" className="hero-btn secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <motion.img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="project-details"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <h2 className="details-title">
          {gradientMode ? '🌈 My Projects Shine with Gradients!' : 'Why My Projects Stand Out?'}
        </h2>
        <ul className="details-list">
          <li>
            ⚡ Built with modern React, Framer Motion, and responsive design
          </li>
          <li>
            🎨 Focused on clean UI/UX and accessibility
          </li>
          <li>
            🔗 Integrated with real-world APIs and backend services
          </li>
          <li>
            🛠️ Optimized for performance and scalability
          </li>
          <li>
            {gradientMode
              ? '✨ Gradient mode enabled for extra flair!'
              : '💡 Always learning and implementing the latest tech trends'}
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="cards-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            className="portfolio-card"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7 }}
            style={
              gradientMode
                ? {
                    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                    color: '#222'
                  }
                : {}
            }
          >
            <div className="card-icon">🚀</div>
            <h3>
              {gradientMode ? `Gradient Project ${i}` : `Project ${i}`}
            </h3>
            <p>
              {gradientMode
                ? 'This card pops with a gradient background and vibrant text!'
                : 'Modern, animated, and responsive project card.  Add your project details here!'}
            </p>
            <Link to="/about" className="card-link">
              See More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Hero;
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for demonstration purposes
    const fakeDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(fakeDelay);
  }, []);

  return (
    <>
          {isLoading && (
        <div className="loader">
          <span className="loader__element"></span>
          <span className="loader__element"></span>
          <span className="loader__element"></span>
        </div>
      )}

      <nav id="desktop-nav">
        <div className="logo">MUHAMMED ASHIQ</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">MUHAMMED ASHIQ</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src="/ASHIQ1.png" alt="John Doe profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I m</p>
          <h1 className="title typewriter">MUHAMMED ASHIQ</h1>
          <p className="section__text__p2">Fullstack Developer</p>
          <div className="btn-container">
            <button 
              className="btn btn-color-2 "
              onClick={() => window.open('/MUHAMMED  ASHIQ' )}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
              Contact Info              
            </button>
          </div>
          <div id="socials-container">
            <img
              src="/linkedin.png"
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => window.location.href = 'https://linkedin.com/'}
            />
            <img
              src="/github.png"
              alt="My Github profile"
              className="icon"
              onClick={() => window.location.href = 'https://github.com/MuhammedAshiqTKD/'}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container" id='imgabout'>
            <img
              src="/aashiq.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>6 month <br />internship @Synnefosolution</p>
              </div>
              <div className="details-container">
                <img
                  src="/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>BCA Bachelors Computer Application<br />Calicut University</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Hello, I'm Ashiq, a MERN stack developer with a BCA degree. I love turning ideas into interactive web applications. My education in computer applications provides a strong foundation, and my hands-on experience in the MERN stack allows me to create dynamic solutions.
                I stay updated on industry trends. My goal is to contribute to innovative projects, collaborate with professionals, and craft impactful digital experiences. Beyond coding, I enjoy insert hobbies or interests, adding to my holistic approach to life and work. Lets create something amazing together!



{/* jnkjbkjbkjbj */}


              </p>
            </div>
          </div>
        </div>
        <img
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#experience'}
        />
      </section>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Tailwind css
                    </h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React Js</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Mongo DB</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="/checkmark.png"
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#projects'}
        />
      </section>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">E-COMMERCE</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/MuhammedAshiqTKD/E-COMMERCE-COSMETICS/'}

                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">COLLEGE-MANAGEMENT</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/MuhammedAshiqTKD/COLLEGE-MANAGEMENT/'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="/project-3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">BOOK-MY-SHOW CLONE</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/MuhammedAshiqTKD/BOOK_MY_SHOW.git'}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = 'https://github.com/'}
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => window.location.href = './#contact'}
        />
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:examplemail@gmail.com">akashiq883@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src="/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a href="https://www.linkedin.com">LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Ashiq. All Rights Reserved.</p>
      </footer>

    </>
  )
}

export default App

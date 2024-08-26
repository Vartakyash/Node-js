import React, { useEffect } from 'react';
// DONT FORGET TO USE ------->import React, { useEffect } from 'react';
// import 'bootstrap/dist/js/bootstrap.min.js';
// *************************************
// npm install react-bootstrap bootstrap
// npm install react-router-dom
// *************************************
function Website() {
    
    useEffect(() => {
        const typingText = document.querySelector('.typing-text');
        const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Backend Developer', 'Coder'];
        let wordIndex = 0;
        let letterIndex = 0;
    
        function type() {
            typingText.textContent = words[wordIndex].substring(0, letterIndex + 1);
            letterIndex++;
            if (letterIndex < words[wordIndex].length) {
                setTimeout(type, 100); // Adjust the typing speed here (milliseconds)
            } else {
                setTimeout(erase, 1500); // Wait before starting to erase
            }
        }
    
        function erase() {
            typingText.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            if (letterIndex > 0) {
                setTimeout(erase, 50); // Adjust the erasing speed here (milliseconds)
            } else {
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Wait before starting to type the next word
            }
        }
    
        typingText.textContent = ''; // Initialize with empty content
        type(); // Start the typing animation
    }, []);
   
    
  return (
    <div>
      <header className="header">
        <a href="/" className="logo"style={{fontFamily: "cursive"}}>Yash</a>
        
        {/* <i className="fa-solid fa-bars menu-icon"></i>  */}
        <nav className="navbar" style={{fontFamily: "cursive"}}>
            <a href="/home" className="active" style={{fontFamily: "cursive"}}>Home</a>
            <a href="/services" style={{fontFamily: "cursive"}}>Services</a>
            <a href="/skills" style={{fontFamily: "cursive"}}>Skills</a>
            <a href="/education" style={{fontFamily: "cursive"}}>Education</a>
            <a href="/experience" style={{fontFamily: "cursive"}}>Experience</a>
            <a href="/contact" style={{fontFamily: "cursive"}}>Contact</a>
        </nav>
    </header>

        <section className="home" id="home">
            <div className="home-img">
                <img src="Guts.jpeg" alt=""></img>
            </div>
            <div className="home-content">
                <h1>Hi, it's<span style={{fontFamily: "cursive"}}> Yash</span></h1>
                <h3 className="typing-text">I'm a <br/> <span></span></h3>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve lorem</p>

                <div className="social-icon">
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="/"><i className="fa-brands fa-github"></i></a>
                    <a href="/"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <a href="/" className="btn">Hire Me</a>
            </div>
        </section>

    </div>
  );
};

export default Website;
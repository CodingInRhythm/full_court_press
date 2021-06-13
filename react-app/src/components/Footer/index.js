import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
      <div className="footer-container">
        <p className="footer-l">
          Full Court Press <span className="copyright">&#169;</span> 2021 by Alex
          Clough
        </p>
        <p className="footer-r">
          Please visit my <a href="https://github.com/codingInRhythm">Github</a>{" "}
          and{" "}
          <a href="https://www.linkedin.com/in/alex-clough-710546200/">
            LinkedIn
          </a>{" "}
          to get in touch.
        </p>
      </div>
    );
}

export default Footer
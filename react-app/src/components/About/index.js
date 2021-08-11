import React from 'react'
import { Link } from 'react-router-dom'
const About = ({show}) => {
    
    return (
      <div className="about-container">
        <p className="about-paragraph">
          Full Court Press is an app where you can:
          <ul>
            <li>Join or create a league</li>
            <li>Make a team</li>
            <li>Build your team up with players of your choosing.</li>
          </ul>
          To learn more, please <Link to="/sign-up" onClick={() => show(false)}>Sign Up</Link> and join your first league!
        </p>
      </div>
    );
}

export default About
// src/pages/About.js
import React from 'react';
import meImage from './me.jpg'; // adjust path based on actual location
import drewImage from './drew.jpg';

function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="page-title">About Us</h1>
      <p style={{lineHeight: 1.7}}>
        Welcome to the first ever soccer (or football, depending where you're from) scout routing optimization app that utilizes optimization 
        techniques to effectively route scouts to soccer games. The optimization algorithm uses distances from stadiums and an formula that quantifies team talent to determine the best route
         for scouts to take in order to maximize their efficiency and effectiveness in scouting players. We will have an additional article that goes into more detail on our 
         processes coming out soon, but for now if you have any questions, suggestions, or contributions, feel free to reach out to our socials below!
      </p>
       {/* Team Section: Two People Side-by-Side */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '2rem',
        marginTop: '3rem',
        flexWrap: 'wrap'
      }}>
        {/* Person 1 */}
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src={meImage}
            alt="Person 1"
            style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <h3>Naveen</h3>
          <p style={{ lineHeight: 1.5 }}>
            Naveen (left) is currently a business data analyst at DHL and enjoys working on sports analytics projects during his free time. He is a former Data Science Intern at Minnesota United FC,
            where he applied data science techniques to player recruitment. He has also interned at Ohio State Athletics as a Sports Science Intern and worked at the 
            Boston Bolts as the Head of Analytics, where he focused on building individual player profiles and team performance metrics. 
          </p>
        </div>

        {/* Person 2 */}
        <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
          <img
            src={drewImage}
            alt="Person 2"
            style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', marginBottom: '1rem' }}
          />
          <h3>Andrew</h3>
          <p style={{ lineHeight: 1.5 }}>
            Andrew (left) is currently a business intelligence specialist at United Soccer League, as well as a part time scout for Lexington Sporting Club’s USLC roster. He recently achieved a M.S. Sport Analytics from Syracuse University, and was most recently an Analytics Consultant for B2League team Kumamoto Volters. Before his journey in analysis, he was a Sports Editor at The Daily Illini during his B.S. Sports Media at the University of Illinois at Urbana-Champaign.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

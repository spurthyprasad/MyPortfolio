import React, { useRef } from 'react';
import './project.css';
import project1 from '../../assets/food.jpg';
import project2 from '../../assets/ecommrce.jpg';
import project3 from '../../assets/crop.jpg';
import project4 from '../../assets/counsilling.jpg';
import project5 from '../../assets/girl4.jpg';
import project6 from '../../assets/girl5.jpg';
import linkedIn from '../../assets/linkedIn.jpg';
import github from '../../assets/github.jpg';
import email from '../../assets/email.jpg';
import emailjs from '@emailjs/browser';

const projects = [
  {
    img: project2,
    title: "ECommerce Website",
    description: "June 2024: Developed a full-stack eCommerce website using Node.js for the backend and React.js for the frontend. Implemented a MongoDB database for storing product and user information. Created RESTful APIs with Express.js for user authentication, product management, and order handling. Designed a responsive user interface with React.js to provide a seamless shopping experience. Utilized JWT for secure user authentication and session management. Conducted thorough testing and debugging to ensure application reliability and performance."
  },
  {
    img: project3,
    title: "Intelicrop: An ensemble model for crop prediction",
    description: "Led the development and implementation of Intelicrop, an ensemble model for crop prediction, from June 2023 to August 2023. Utilized advanced machine learning techniques, achieving a 95% increase in crop prediction accuracy. Optimized agricultural decision-making processes, resulting in a 40% improvement in overall yield. Designed an intuitive interface for farmers, simplifying access to and interpretation of crop prediction data."
  },
  {
    img: project4,
    title: "Student Counselling Management System",
    description: "Developed a Student Counselling Management System for BMSIT College as part of a two-person team from July 2022 to October 2022. Enhanced the front-end, leading to a 20% increase in user satisfaction and streamlined counseling processes. Achieved a 15% reduction in process time, significantly improving the overall user experience. Designed a communication system using Java to enhance interactions between students and counselors."
  },
  {
    img: project1,
    title: "Food ordering website for local restaurant",
    description: "April 2021 - September 2021: Collaborated with a team of four to create a client-based project officially certified by Mangalore University. Led the design of the project's frontend using HTML, JavaScript, and CSS, which contributed to a remarkable 25% increase in user engagement. Created dedicated PHP modules, leading to a significant 30% enhancement in the project's overall performance. Successfully implemented a user-friendly order tracking system that enhanced the customer experience."
  },
  {
    img: project6,
    title: "Project 6",
    description: "Description of project 6 emphasizing the final outcome and impact."
  }
];

export const Project = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5gia559', 'template_p9q2jbj', form.current, {
            publicKey: 'kW4W5zTpChgkzhd8o',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('Email sent successfully!');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section className='contactPage'>
      <div className='clients'>
        <h1 className='contactPageTitle'><center>My Projects</center></h1>
        <p className='clientDesc'><center>
          These projects showcase a collection of my recent works, highlighting my skills and creativity.
          Each piece is presented with a consistent design for a seamless and visually appealing experience.
          </center></p>
        
        <form className='projectForm' ref={form} onSubmit={sendEmail}>
          <div className='clientImgs'>
            {projects.map((project, index) => (
              <div className='clientItem' key={index}>
                <div className='clientImgWrapper'>
                  <img src={project.img} alt={project.title} className='clientImg'/>
                </div>
                <div className='clientText'>
                  <h2 className='clientTitle'>{project.title}</h2>
                  <p className='clientDescription'>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <div className='contactForm'>
              <input type='text' className='name' placeholder='Your Name' name="from_name" required/>
              <input type='email' className='email' placeholder='Your Email' name="reply_to" required/>
              <textarea className='msg' name='message' rows="5" placeholder='Your Message' required></textarea>
              <button type='submit' className='submitBtn'>Submit</button>
            </div>
            <div className='links'>
              <img src={linkedIn} alt='LinkedIn' className='link'/>
              <img src={github} alt='GitHub' className='link'/>
              <img src={email} alt='Email' className='link'/>
            </div>
          </div>
        </form>
        
      </div>
    </section>
  );
};

export default Project;

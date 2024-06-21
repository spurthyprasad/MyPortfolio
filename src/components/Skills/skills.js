import React from 'react'
import './skills.css';
import programing from '../../assets/db.jpg'
import code from '../../assets/pf4.jpg'
import FE from '../../assets/fE.jpg'
import book from '../../assets/pf3.jpg'
import gbook from '../../assets/tool.jpg'
import gbook1 from '../../assets/pf1.jpg'


export const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skilldesc'>I am an MCA graduate with a strong background in software development. My skills include proficiency in multiple programming languages, frameworks, and tools. I also have experience in project management and effective communication.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={code} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Programming Languages</h2>
            <p>C, C++, JavaScript, Java, HTML, CSS, Python basics, C#, VB.net, ASP.net, Node.js ,PHP</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={programing} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Databases</h2>
            <p>MySQL, DBMS</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={FE} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Frameworks & Libraries</h2>
            <p>React.js, ASP.net, Machine Learning</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={book} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Development Practices</h2>
            <p>Data Structures, Object-Oriented Programming (OOP), Agile software development</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={gbook} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Tools</h2>
            <p>Jira, SharePoint, Microsoft Suite, Postman</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={gbook1} alt=" " className='skillBarImg'/>
          <div className='skillBarText'>
            <h2>Miscellaneous</h2>
            <p>Data analysis, Project management, Presentation and communication</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}
export default Skills
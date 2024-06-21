import React from 'react'
import './intro.css'
// import {Link} from 'react-scroll';
// import hire from '../../assets/hireme.jpg'


export const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm  <span className='introName'> Spurthy</span><br/> MCA Graduate</span>
      <p className='introPara'>MCA graduate with a sincere passion for software development and technology, actively seeking entry-level opportunities. My aim is to work in an
environment that fosters professional growth, allowing me to leverage my skills and knowledge effectively. I am eager to take on a challenging career,
emphasizing commitment and teamwork, where I can make a significant contribution to the company's financial growth and strategic objectives</p>
    {/* <Link><button className='btn'><img src={hire} alt=''/>Hire Me</button></Link> */}
    </div>

    {/* image mustb me placed here */}
    </section>
  )
}
export default Intro

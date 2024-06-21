import React from 'react'
import './works.css'
import profolio1 from '../../assets/pf1.jpg'
import profolio2 from '../../assets/pf2.jpg'
import profolio3 from '../../assets/pf3.jpg'
import profolio4 from '../../assets/pf4.jpg'
import profolio5 from '../../assets/pf5.jpg'
import profolio6 from '../../assets/pf6.jpg'

export const Works = () => {
  return (
   <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
    <span className='worksDesc'>   </span>
    <div className='worksImgs'>
        <img src={profolio1} alt='' className='worksImg'/>
        <img src={profolio2} alt='' className='worksImg'/>
        <img src={profolio3} alt='' className='worksImg'/>
        <img src={profolio4} alt='' className='worksImg'/>
        <img src={profolio5} alt='' className='worksImg'/>
        <img src={profolio6} alt='' className='worksImg'/>
    </div>
    <button className='workBtn'>See More</button>
    </section>
  )
}
export default Works;
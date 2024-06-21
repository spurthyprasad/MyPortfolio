import React from 'react';
import './education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master Of Computer Application',
      college: 'BMS Institute of Technology and Management',
      location: 'Bengaluru, India',
      date: '2021-2023',
      grade: 'CGPA: 8.7',
    },
    {
      id: 2,
      degree: 'Bachelor Of Computer Application',
      college: 'SDM Degree College',
      location: 'Ujire, India',
      date: '2018-2021',
      grade: 'Percentage: 73.4%',
    },
    {
      id: 3,
      degree: 'PUC (Pre-University Course)',
      college: 'Ambika Padavi Poorva Vidyalaya',
      location: 'Puttur,Karnataka,Puttur',
      date: '2016-2018',
      grade: 'Percentage:74.5',
    },
  ];

  return (
    <section id='education'>
    <div className='educationContainer'>
      <h2 className='educationTitle'>Education</h2>
      <form className='educationForm'>
        {educationData.map((edu) => (
          <div className='educationCard' key={edu.id}>
            <label className='formLabel'>
              <span className='labelText'>Degree:</span>
              <input type='text' className='formInput' value={edu.degree} readOnly />
            </label>
            <label className='formLabel'>
              <span className='labelText'>College:</span>
              <input type='text' className='formInput' value={edu.college} readOnly />
            </label>
            <label className='formLabel'>
              <span className='labelText'>Location:</span>
              <input type='text' className='formInput' value={edu.location} readOnly />
            </label>
            <label className='formLabel'>
              <span className='labelText'>Date:</span>
              <input type='text' className='formInput' value={edu.date} readOnly />
            </label>
            <label className='formLabel'>
              <span className='labelText'>Grade:</span>
              <input type='text' className='formInput' value={edu.grade} readOnly />
            </label>
          </div>
        ))}
      </form>
      </div>
    </section>
  );
}

export default Education; 

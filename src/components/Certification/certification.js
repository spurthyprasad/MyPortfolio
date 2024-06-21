import React from 'react';
import './certification.css';
import { FaGraduationCap, FaFileAlt } from 'react-icons/fa'; // Importing icons from react-icons/fa

const certifications = [
    "Pursuing (Java, J2EE, Spring & Web technology) training from PENTAGON SPACE Bangalore.",
    "UI/UX DESIGN at Internshala (2023)",
    "Introduction to JavaScript: The basics by COURSERA (2021)",
    "HTML & CSS: Building a Single-page website COURSERA (2021)",
    "Python bootcamp for beginners Website Udemy (2020)"
];

const paperPublications = [
    {
        title: "InteliCrop: A Machine Learning-based Group System for Crop Prediction",
        journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
        volume: "Volume 07, Issue 08",
        date: "August 2023",
        link: "https://ijsrem.com/download/intelicrop-a-machine-learning-based-group-system-for-crop-prediction/"
    }
];

const CertificationsPage = () => {
    return (
        <section id='certification'>
            <div className="certificationsPage">
                <h1 className="pageTitle">Certifications</h1>
                <ul className="certificationsList">
                    {certifications.map((certification, index) => (
                        <li key={index} className="certificationItem">
                            <FaGraduationCap className="certificationIcon" />
                            <div className="certificationContent">
                                <p className="certificationText">{certification}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <h1 className="pageTitle">Paper Publications</h1>
                {paperPublications.map((publication, index) => (
                    <div key={index} className="publicationItem">
                        <FaFileAlt className="publicationIcon" />
                        <div className="publicationContent">
                            <h2 className="publicationTitle">{publication.title}</h2>
                            <p className="publicationDetails">
                                {publication.journal}, {publication.volume}, {publication.date}
                            </p>
                            <a href={publication.link} className="publicationLink" target="_blank" rel="noopener noreferrer">
                                Read Paper
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CertificationsPage;

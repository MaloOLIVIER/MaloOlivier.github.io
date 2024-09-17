import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <section className="personal-info">
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> Your Name</p>
                <p><strong>Email:</strong> your_email@example.com</p>
                <p><strong>Phone:</strong> Your Phone Number</p>
                <p><strong>LinkedIn:</strong> Your LinkedIn Profile Link</p>
            </section>
            <section className="education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <h4>Degree Name</h4>
                        <p>University Name</p>
                        <p>Location, Country</p>
                        <p>Graduation Date</p>
                    </li>
                    {/* Add more education entries here */}
                </ul>
            </section>
            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 2</li>
                    {/* Add more skills here */}
                </ul>
            </section>
            <section className="experience">
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h4>Job Title</h4>
                        <p>Company Name</p>
                        <p>Location, Country</p>
                        <p>Start Date - End Date</p>
                        <ul>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                            {/* Add more responsibilities here */}
                        </ul>
                    </li>
                    {/* Add more experience entries here */}
                </ul>
            </section>
        </div>
    );
};

export default Resume;
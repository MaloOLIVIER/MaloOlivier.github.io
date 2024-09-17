import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <p>Feel free to reach out to me with any questions or inquiries.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
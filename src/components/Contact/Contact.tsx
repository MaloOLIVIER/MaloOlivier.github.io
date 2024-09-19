import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Contact: React.FC = () => {
    return (
        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 20, gap: 4 }}
        >
            <Typography variant="h1" gutterBottom fontFamily={'Roboto'}>Contact</Typography>

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

        </Container>
    );
};

export default Contact;
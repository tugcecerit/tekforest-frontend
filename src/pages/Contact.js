import React from 'react';

const Contact = (props) => {
    const handleAlert = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        window.location.href = '/home';
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" /><br /><br />
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name="phoneNumber" id="phoneNumber" /><br /><br />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" /><br /><br />
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" cols="50"></textarea><br /><br />
                <button onClick={handleAlert} type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact;


import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    const handleAlert = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        window.location.href = '/';
    }
    return (
        <div className='contact-us'>  
        <div className='contact-us-content'>      
            <h1>CONTACT US</h1> 
            <div className='contact-us-form'>
            <form className="pure-form pure-form-aligned pure-u-1 pure-u-md-1-2">
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="aligned-name">Name</label>
                        <input type="text" className="pure-input-1-4" id="aligned-name" placeholder="Name" />
                    </div><br></br>
                    <div className="pure-control-group">
                        <label htmlFor="aligned-tel">Phone Number</label>
                        <input type="tel" className="pure-input-1-4" id="aligned-tel" placeholder="Phone Number" />
                    </div><br></br>
                    <div className="pure-control-group">
                        <label htmlFor="aligned-email">Email Address</label>
                        <input type="email" className="pure-input-1-4" id="aligned-email" placeholder="Email Address" />
                    </div><br></br>
                    <div className="pure-control-group">
                        <label htmlFor="aligned-foo">Message</label>
                        <textarea className="pure-input-1-4" id="aligned-foo" placeholder="Message" rows="5"></textarea>
                    </div><br></br>
                    <div className="pure-controls">
                        <label htmlFor="aligned-cb" className="pure-checkbox">
                            <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms and conditions
                        </label><br></br><br></br>
                        <div className='contact-us-button'>
                        <button onClick={handleAlert} type="submit" className='link'>Submit</button>
                        <button className='home-button'>
                            <Link to="/" className='link'>Home</Link>
                        </button>
                        </div>
                    </div>
                </fieldset>
            </form>
            </div>
            </div>   
        </div>
    )
}

export default Contact;
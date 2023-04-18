import React from 'react';

const Contact = (props) => {
    const handleAlert = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        window.location.href = '/';
    }
    return (
        <div className='contact-us'>           
            <h1>CONTACT US</h1> 
            <form class="pure-form pure-form-aligned">
                <fieldset>
                    <div class="pure-control-group">
                        <label for="aligned-name">Name</label>
                        <input type="text" class="pure-input-1-4" id="aligned-name" placeholder="Name" />
                    </div><br></br>
                    <div class="pure-control-group">
                        <label for="aligned-name">Phone Number</label>
                        <input type="tel" class="pure-input-1-4" id="aligned-name" placeholder="Phone Number" />
                    </div><br></br>
                    <div class="pure-control-group">
                        <label for="aligned-email">Email Address</label>
                        <input type="email" class="pure-input-1-4" id="aligned-email" placeholder="Email Address" />
                    </div><br></br>
                    <div class="pure-control-group">
                        <label for="aligned-foo">Message</label>
                        <textarea class="pure-input-1-4" id="aligned-foo" placeholder="Message" rows="5" ></textarea>
                    </div><br></br>
                    <div class="pure-controls">
                        <label for="aligned-cb" class="pure-checkbox">
                            <input type="checkbox" id="aligned-cb" /> I&#x27;ve read the terms and conditions
                        </label><br></br><br></br>
                        <button onClick={handleAlert} type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Contact;


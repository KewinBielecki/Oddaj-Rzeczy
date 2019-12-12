import React from 'react';
import './ContactSection.scss';
import ContactForm from './ContactForm/ContactForm.js';

const ContactSection = () => {
    return (
        <section className='ContactSection_container'>
            <div className='ContactSection_header'>
                <h2>Skontaktuj się z nami</h2>
                <div className='page-call-decoration'></div>
                <ContactForm/>
            </div>

            <footer>
                <div className='fb-icon'><a href='https://www.facebook.com/' className='custom-fb' target='_blank' rel="noopener noreferrer"></a></div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='ig-icon'><a href='https://www.instagram.com/' className='custom-ig' target='_blank' rel="noopener noreferrer"></a></div>
                <p className='copyright'>Copyright 2019 &copy; by Kewin Bielecki</p>
            </footer>
        </section>
    )
}


export default ContactSection;
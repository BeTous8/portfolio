import { useState } from "react"; 

export default function Contact({handleContactClick}) {

    return (
        <section className="contact">
            <div className="contact-content">
                <h2>Let's Get In Touch</h2>
                <p>I'm actively seeking opportunities to build responsive, user-friendly web applications using React and modern JavaScript.</p>
                <button className="contact-button" onClick={handleContactClick}>
                    Contact Me
                </button>

                <p>Let's connect and discuss how I can contribute to your next project!</p>
            </div>
        </section>
    );
}
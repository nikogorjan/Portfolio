import React, { useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

   

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    

    const handleSubmit = (e) => {
        console.log("before prevent");

        e.preventDefault();
        console.log("sending email");
        // Here, you can perform any additional actions with the `fullName` value, such as sending it to the backend server.
        const templateParams = {
            from_name: fullName,
            from_email: email,
            message: message
          };

          emailjs.send('service_ntc93k8', 'template_xjt4h4j', templateParams, 'qjctlMy68iSCBqueO')
          .then((response) => {
            console.log('Email sent successfully:', response.text);
            window.alert('Email sent successfully:');

            // Reset the form after successful submission if needed
            setFullName("");
            setEmail("");
            setMessage("");
          })
          .catch((error) => {
            console.error('Error sending email:', error);
          });

        // Reset the form after submission if needed
        setFullName("");
    };


    return (
        <div className='contact-form-main'>
            <div className='form-row'>
                <div className='input-container'>
                    <input type='text' id='name' className='input-box' placeholder='Name' onChange={handleFullNameChange}/>
                </div>
                <div className='input-container'>
                    <input type='text' id='email' className='input-box' placeholder='Email' onChange={handleEmailChange}/>

                </div>
            </div>
            
            <div className='textarea-layout'>
                <div className='textarea-container'>
                    <textarea id='message' className='textarea-box' placeholder='Message' onChange={handleMessageChange}></textarea>
                </div>
            </div>

            <div className='contact-button-container'><button className='btn-5 color-yello btn-margin' onClick={handleSubmit}>Send</button></div>

            
        </div>
    );
}

export default ContactForm;
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailPattern.test(email) && email.length >= 5;
  };

  const validateName = (name) => {
    const namePattern = /^[a-zA-Z\s]+$/; 
    return namePattern.test(name);
  };

  const validateMessage = (message) => {
    return message.trim().split(/\s+/).length >= 5; 
  };
  
  const handleValidation = () => {
    const validationErrors = {};
    
    if (!validateName(forms.name)) {
      validationErrors.name = 'Name must contain only letters and spaces.';
    }
    if (!validateEmail(forms.email)) {
      validationErrors.email = 'Please enter a valid email (at least 5 characters long).';
    }
    if (!validateMessage(forms.message)) {
      validationErrors.message = 'Message must be at least 5 words long.';
    }
    
    setErrors(validationErrors);
    
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = ({ target: { name, value } }) => {
    setForms({ ...forms, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) return; // Stop submission if validation fails
    
    setLoading(true);
    
    try {
      await emailjs.send(
        'service_qjcvzbh',
        'template_55sp6gi',
        {
          from_name: forms.name,
          to_name: 'Hrishabh Joshi',
          from_email: forms.email,
          message: forms.message,
          to_email: 'hrishabhjoshi123@gmail.com'
        },
        '9CIPS7rhyl95LFH2K'
      );
      setLoading(false);
      alert('Message sent successfully');
      setForms({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      alert('Something went wrong, please try again later');
      console.log(error);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <h3 className="head-text text-center">Contact Me</h3>
      <div className="relative min-h-screen flex items-center justify-center flex-col flex-wrap">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen hidden sm:block"
        />

        <div className="contact-container flex flex-col items-center p-5 bg-opacity-90 rounded-lg shadow-lg max-w-xl w-full overflow-hidden">
          <h3 className="head-text text-center">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3 text-center">
            Feel free to reach out! Let's build something great together.
          </p>

          <form ref={form} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7 w-full">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={forms.name}
                onChange={handleChange}
                required
                className="field-input w-full"
                placeholder="ex., John Doe"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={forms.email}
                onChange={handleChange}
                required
                className="field-input w-full"
                placeholder="ex., johndoe@gmail.com"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={forms.message}
                onChange={handleChange}
                required
                className="field-input w-full h-20 md:h-32 resize-none"
                placeholder="Share your thoughts or inquiries..."
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

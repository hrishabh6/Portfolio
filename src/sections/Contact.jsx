import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setForms({ ...forms, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <div className="relative min-h-screen flex items-center justify-center flex-col">
      <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container flex flex-col items-center p-5 bg-opacity-90 rounded-lg shadow-lg max-w-xl w-full overflow-hidden">
          <h3 className="head-text text-center">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3 text-center">
            I'm always open to new opportunities, collaborations, and exciting projects. Whether you're looking to discuss a job opportunity, a freelance project, or just want to connect and share ideas, feel free to reach out! Let's build something great together.
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
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={forms.message}
                onChange={handleChange}
                required
                className="field-input w-full h-20 md:h-32 resize-none" // Adjust height here for mobile and larger screens
                placeholder="Share your thoughts or inquiries..."
              />
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

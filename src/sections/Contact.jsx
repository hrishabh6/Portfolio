import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    //service_qjcvzbh
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [forms, setForms] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForms({ ...forms, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            await emailjs.send('service_qjcvzbh',
                'template_55sp6gi',
                {
                    from_name: forms.name,
                    to_name: 'Hrishabh Joshi',
                    from_email: forms.email,
                    message: forms.message,
                    to_email: 'hrishabhjoshi123@gmail.com'
                }, '9CIPS7rhyl95LFH2K')
            setLoading(false);
            alert('Message sent successfully')
            setForms({
                name: '',
                email: '',
                message: ''
            }
            )
        } catch (error) {
            setLoading(false);
            alert('Something went wrong, please try again later')
            console.log(error)

        }
    }

    return (
        <section>
            <div className='c-space my-20'>
                <h3 className='head-text'>Contact Me</h3>
                <div className='relative min-h-screen flex items-center justicy-center flex-col'>
                    <img src="/assets/terminal.png" alt="terminal bg" className='absolute inset-0 min-h-screen' />
                    <div className='contact-container' style={{ marginTop: '8rem' }}>
                        <h3 className='head-text'>Lets connect</h3>
                        <p className='text-lg text-white-600 mt-3' >I'm always open to new opportunities, collaborations, and exciting projects. Whether you're looking to discuss a job opportunity, a freelance project, or just want to connect and share ideas, feel free to reach out! Let's build something great together.    </p>
                        <form action="" ref={formRef} onSubmit={handleSubmit} className='flex flex-col mt-12 space-y-7'>
                            <label htmlFor="" className='space-y-3'>
                                <span className='field-lable text-white-700'> Full Name </span>
                                <input type="text" name="name" id="" value={forms.name} onChange={handleChange} className='field-input' placeholder='ex., John Doe' />
                            </label>
                            <label htmlFor="" className='space-y-3'>
                                <span className='field-lable text-white-700'> Email </span>
                                <input type="email" name="email" id="" value={forms.email} onChange={handleChange} className='field-input' placeholder='ex., johndoe@gmail.com' />
                            </label>
                            <label htmlFor="" className='space-y-3'>
                                <span className='field-lable text-white-700'> Your Message </span>
                                <textarea name="message" id="" value={forms.message} onChange={handleChange} className='field-input' placeholder='Hi, lets discuss your salary....' rows={5} />
                            </label>
                            <button type='submit' className='field-btn' disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                                <img src="/assets/arrow-up.png" alt="arrow up" className='field-btn_arrow' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

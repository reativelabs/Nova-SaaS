import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 font-medium text-text-main">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full p-3 border border-slate-200 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 font-medium text-text-main">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full p-3 border border-slate-200 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 font-medium text-text-main">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full p-3 border border-slate-200 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-text-main">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us more about your project..."
                    className="w-full p-3 border border-slate-200 rounded font-inherit text-base transition-colors focus:outline-none focus:border-primary focus:ring-3 focus:ring-primary/10"
                ></textarea>
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 border-none bg-primary text-white hover:bg-primary-hover hover:-translate-y-px hover:shadow-md">
                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
            </button>
        </form>
    );
};

export default ContactForm;

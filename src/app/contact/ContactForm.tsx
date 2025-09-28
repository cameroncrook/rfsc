'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Handle successful submission (e.g., show a success message)
                console.log('Message sent successfully');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                // Handle errors (e.g., show an error message)
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>Your Name</label>
                <div className="mt-1">
                <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" type="text"/>
            </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"email"}>Your Email</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" type="email"/>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"subject"}>Subject</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" type="text"/>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"message"}>Message</label>
                <div className="mt-1">
                    <textarea className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" rows={4}></textarea>
                </div>
            </div>
            <div>
                <button className="flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer" type="submit">Send Message</button>
            </div>
        </form>
    )
}
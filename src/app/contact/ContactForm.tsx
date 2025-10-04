'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [isSending, setIsSending] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [messageError, setMessageError] = useState(false);
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
        setIsSending(true);
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
                setIsSending(false);
                setMessageSent(true);
            } else {
                // Handle errors (e.g., show an error message)
                console.error('Failed to send message');
                setMessageError(true);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setMessageError(true);
        }
    };

    return (
        <>
        {messageSent && <div className="mb-4 p-4 text-green-800 bg-green-100 rounded-lg">Your message has been sent!</div>}
        {messageError && <div className="mb-4 p-4 text-red-800 bg-red-100 rounded-lg">There was an error sending your message. Please refresh the page and try again.</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"name"}>Your Name</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" type="text" required/>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor={"email"}>Your Email</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary sm:text-sm py-3 px-4" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" type="email" required/>
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
                <button className={`flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer`} type="submit" disabled={isSending}>{isSending ? 'Sending' : 'Send Message'}</button>
            </div>
        </form>
        </>
    )
}
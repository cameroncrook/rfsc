'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ token }: { token: string }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formDataObj: Record<string, string | File> = {};
        const formData = new FormData(form);
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        try {
            if (formDataObj['password'] !== formDataObj['confirm']) {
                setErrorMessage('Passwords do not match');
                setIsSubmitting(false);
                return;
            }

            const response = await fetch('/api/coach/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(formDataObj),
            });

            if (response.ok) {
                router.push('/coach/login');
            } else if (response.status === 400) {
                setErrorMessage('Invalid or expired token');
                return;
            } else {
                setErrorMessage('Failed to register');
                return;
            }
        } catch (err) {
            setErrorMessage('Failed to register');
            return;
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="first_name">First Name</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="first_name" name="first_name" type="text" required />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="last_name">Last Name</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="last_name" name="last_name" type="text" required />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="password" name="password" type="password" required />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="confirm">Re-Enter Password</label>
                <div className="mt-1">
                    <input className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="confirm" name="confirm" type="password" required />
                </div>
            </div>

            <input type="hidden" name="token" value={token} />
            <div>
                <button className={`flex w-full justify-center rounded-lg ${isSubmitting ? 'bg-gray-500' : 'bg-primary cursor-pointer'} py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white`} type="submit" disabled={isSubmitting}>Register</button>
            </div>
        </form>
    )
}
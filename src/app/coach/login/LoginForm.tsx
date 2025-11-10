'use client'

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
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

        const coach = await signIn('credentials', {
            email: formDataObj.email,
            password: formDataObj.password,
            callbackUrl: '/coaches/messages',
        })

        console.log(coach);

        // try {
        //     const response = await fetch('/api/coach/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formDataObj),
        //     });
        //     const data = await response.json();

        //     if (response.ok) {
        //         router.push('/coaches/messages');
        //     } else {
        //         setErrorMessage(data.message);
        //         setIsSubmitting(false);
        //         return;
        //     }

        // } catch (err) {
        //     console.log(err);
        //     setErrorMessage('Failed to login');
        //     return;
        // }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <div className="mt-1">
                    <input autoComplete="email" className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="email" name="email" type="email" required />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                <div className="mt-1">
                    <input autoComplete="current-password" className="block w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm" id="password" name="password" type="password" required />
                </div>
            </div>
            <div className="flex items-center jsutify-between">
                <div className="text-sm">
                    <a className="font-medium text-primary hover:text-opacity-80" href="#">Forgot your password?</a>
                </div>
            </div>
            <div>
                <button className="flex w-full justify-center rounded-lg bg-primary py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white" type="submit" disabled={isSubmitting}>Login</button>
            </div>
        </form>
    )
}
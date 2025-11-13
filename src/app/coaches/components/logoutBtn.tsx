'use client'

import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutBtn() {
    return (
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-primary/10 w-full cursor-pointer" onClick={() => signOut()}>
            <span className="material-symbols-outlined">logout</span>
            <span className="text-sm font-medium">Sign Out</span>
        </button>
    )
}
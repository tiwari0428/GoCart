'use client'

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function AuthButtons({ mobile = false }) {
    const { isSignedIn } = useUser();
    const buttonClassName = mobile
        ? "px-7 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-sm transition text-white rounded-full"
        : "px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full";

    if (isSignedIn) {
        return <UserButton afterSignOutUrl="/" />;
    }

    return (
        <SignInButton mode="modal">
            <button className={buttonClassName}>
                Login
            </button>
        </SignInButton>
    );
}

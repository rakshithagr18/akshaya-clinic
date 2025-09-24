"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DoctorLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        if (!email || !password) {
            alert("⚠️ Please enter both email and password!");
            return;
        }
        alert(`✅ Doctor Login successful!\nEmail: ${email}\nPassword: ${password}`);
        // router.push("/doctor-dashboard");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-left">
                    Doctor Login
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        <span className="text-red-500">*</span> Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                        <span className="text-red-500">*</span> Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                {/* Login Button */}
                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full mt-4 bg-red-400 text-white py-2 rounded-lg font-medium hover:bg-red-500 transition text-sm sm:text-base"
                >
                    Login
                </button>

                {/* Footer link */}
                <div className="mt-6 text-left text-sm sm:text-base">
                    <p className="text-gray-600">
                        Don’t have an account?{" "}
                        <Link href="/doctor-signup" className="text-sky-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DoctorLoginForm;

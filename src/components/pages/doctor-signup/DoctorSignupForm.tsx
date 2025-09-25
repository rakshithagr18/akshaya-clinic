"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const DoctorSignupForm: React.FC = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = () => {
        if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword) {
            alert("⚠️ Please fill in all required fields!");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("⚠️ Passwords do not match!");
            return;
        }

        if (!acceptTerms) {
            alert("⚠️ You must accept the Terms and Conditions!");
            return;
        }

        console.log("Registering doctor:", form);
        alert("✅ Doctor Registration successful!");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6 sm:p-8 text-left">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
                    Signup
                </h2>

                {/* Form Fields */}
                <div className="space-y-4">
                    {/* First Name */}
                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-500">*</span> First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your first name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-500">*</span> Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your last name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-500">*</span> Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-500">*</span> Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
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

                    {/* Confirm Password */}
                    <div>
                        <label className="flex items-center gap-1 text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-500">*</span> Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                placeholder="Re-enter your password"
                                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            className="mr-2"
                        />
                        <span className="text-sm text-gray-600">
                            I accept the{" "}
                            <Link href="#" className="text-sky-500 hover:underline">
                                Terms and Conditions
                            </Link>
                        </span>
                    </div>

                    {/* Register Button */}
                    <button
                        type="button"
                        onClick={handleRegister}
                        className="w-full bg-red-400 text-white py-2 rounded-lg font-medium hover:bg-red-500 transition text-sm sm:text-base"
                    >
                        Register
                    </button>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-left text-sm sm:text-base">
                    <p className="text-gray-600">
                        Already have an account?{" "}
                        <Link href="/doctor-login" className="text-sky-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DoctorSignupForm;

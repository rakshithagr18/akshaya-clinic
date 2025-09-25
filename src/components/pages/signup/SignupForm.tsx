"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/constants";

const SignupForm: React.FC = () => {
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleRegister = async () => {
    // Validation
    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword) {
      setError("⚠️ Please fill in all required fields!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("⚠️ Passwords do not match!");
      return;
    }

    if (!acceptTerms) {
      setError("⚠️ You must accept the Terms and Conditions!");
      return;
    }

    if (form.password.length < 6) {
      setError("⚠️ Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password
        }),
      });

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await res.text();
        console.error("Non-JSON response:", textResponse.substring(0, 200));

        if (res.status === 200 || res.status === 201) {
          // Assume success if status is 200/201 but response isn't JSON
          alert("✅ Registration successful! Please login.");
          router.push("/login");
          return;
        }

        setError("❌ Server error. Please try again later.");
        return;
      }

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.error || `❌ Registration failed (${res.status}). Please try again.`);
        return;
      }

      // Registration successful
      console.log("Registration successful:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      alert("✅ Registration successful! Please login.");
      router.push("/login");

    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.name === "TypeError" && err.message.includes("fetch")) {
        setError("❌ Network error. Please check your connection.");
      } else {
        setError("❌ Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-md p-6 sm:p-8 text-left">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Create an account
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
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
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
                placeholder="Enter your password (min. 6 characters)"
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-sm sm:text-base"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                disabled={loading}
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
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
                disabled={loading}
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
              disabled={loading}
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
            disabled={loading}
            className="w-full bg-red-400 text-white py-2 rounded-lg font-medium hover:bg-red-500 transition text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </div>

        {/* Footer links */}
        <div className="mt-6 text-left text-sm sm:text-base">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-sky-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;

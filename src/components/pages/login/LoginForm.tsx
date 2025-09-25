"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/constants";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("⚠️ Please enter both email and password!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || data.error || "❌ Login failed. Please try again.");
        return;
      }

      // Assuming the API returns a token upon successful login
      if (data.token) {
        localStorage.setItem("token", data.token);
        // You might also want to store user data if returned
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      }

      // Redirect to dashboard on successful login
      router.push("/dashboard");

    } catch (err) {
      console.error("Login error:");
      setError("❌ Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-left">
          Login to your account
        </h2>

        {error && (
          <p className="mb-4 text-red-500 text-sm font-medium">{error}</p>
        )}

        <form onSubmit={handleLogin}>
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
              disabled={loading}
            />
          </div>

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
            <div className="text-right mt-1">
              <Link href="#" className="text-sm text-sky-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-red-400 text-white py-2 rounded-lg font-medium hover:bg-red-500 transition text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-left text-sm sm:text-base">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-sky-500 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

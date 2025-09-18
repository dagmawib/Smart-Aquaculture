"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    router.push("/dashboard");
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-2xl bg-white shadow-lg">
        {/* Left Side - Logo */}
        <div className="flex w-1/2 flex-col items-center justify-center p-8 md:border-r border-gray-300">
          <div className="flex items-center space-x-3">
            <div className="flex h-20 w-20 items-center justify-center rounded-full">
              <Icon icon="ph:drop-fill" width="256" height="256" className="text-[#007AFF]" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              Smart <br /> Aquaculture
            </h1>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex w-1/2 flex-col justify-center py-10 px-16">
          <h2 className="mb-2 text-4xl font-bold text-gray-900">
            Welcome <br /> back
          </h2>
          <p className="mb-6 text-sm text-gray-600">
            Enter your credentials to continue
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-md bg-gray-100 border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span>Show password</span>
              </label>
              <a href="#" className="text-black hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-md bg-[#007AFF] px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a href="#" className="font-medium text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

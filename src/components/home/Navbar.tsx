"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">
            <Link href="/">Figma Clone</Link>
          </div>
          <div className="flex items-center">
            <Link href="/signin" className="text-gray-600 hover:text-gray-800 px-3 py-2">
                Sign In
            </Link>
            <Link href="/signup" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

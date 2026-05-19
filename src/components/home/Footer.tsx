"use client";

export const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            &copy; 2024 Figma Clone. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

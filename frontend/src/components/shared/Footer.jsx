import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700 pt-10 pb-6 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">Workora</h2>
            <p className="text-sm mt-2">
              Your gateway to better career opportunities. Search, apply, and
              grow with us.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/guides" className="hover:underline">
                  User Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm mb-3">
              Get job alerts and career tips straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Workora. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.325 24H12.82v-9.294H9.692V11.14h3.128V8.414c0-3.1 1.892-4.787 4.657-4.787 1.325 0 2.463.099 2.794.143v3.237h-1.918c-1.503 0-1.794.715-1.794 1.762v2.311h3.588l-.467 3.567h-3.121V24h6.116C23.408 24 24 23.407 24 22.674V1.326C24 .593 23.408 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.93 4.93 0 002.165-2.723 9.865 9.865 0 01-3.127 1.194A4.918 4.918 0 0016.616 3c-2.73 0-4.945 2.215-4.945 4.945 0 .388.043.765.127 1.124C7.728 8.88 4.1 6.914 1.671 3.942a4.93 4.93 0 001.527 6.593 4.905 4.905 0 01-2.239-.616v.062a4.937 4.937 0 003.95 4.834 4.922 4.922 0 01-2.23.084 4.936 4.936 0 004.604 3.417A9.874 9.874 0 010 19.54a13.933 13.933 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.009 0-.213-.005-.425-.015-.636A10.03 10.03 0 0024 4.557z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24H22.23C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.23 0zM7.118 20.452H3.56V9.755h3.558v10.697zM5.34 8.289a2.065 2.065 0 110-4.13 2.065 2.065 0 010 4.13zm15.113 12.163h-3.558v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667h-3.557V9.755h3.414v1.465h.05c.476-.902 1.637-1.852 3.369-1.852 3.603 0 4.268 2.37 4.268 5.454v5.63z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

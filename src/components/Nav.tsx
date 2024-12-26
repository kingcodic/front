import React from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Custom hook for AuthContext
import NotificationBell from "./NotificationBell"; // NotificationBell component

export default function Nav() {
  const { user, setUser } = useAuth(); // Access authentication state
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT from local storage
    setUser(null); // Clear user state
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <div className="relative bg-white uppercase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-8 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-8 w-auto sm:h-14" src={logo} alt="Smahar" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10 uppercase">
              <Link
                to="/contact"
                className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
              >
                تواصل معنا
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
              >
                عنا
              </Link>
              {user && (
                <>
                  <Link
                    to="/profile"
                    className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
                  >
                    الملف الشخصي
                  </Link>
                  <NotificationBell />
                </>
              )}
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  تسجيل الخروج
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white transition bg-[#148da1] hover:bg-indigo-700"
                  >
                    انشر
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <Link to="/">
                  <img className="h-8 w-auto" src={logo} alt="Smahar" />
                </Link>
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setOpen(!open)}
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <nav className="uppercase text-center">
                <Link
                  to="/contact"
                  className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
                >
                  تواصل معنا
                </Link>
                <Link
                  to="/about"
                  className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
                >
                  عنا
                </Link>
                {user && (
                  <>
                    <Link
                      to="/profile"
                      className="text-base font-medium text-gray-500 hover:scale-110 transition duration-500 hover:text-gray-900"
                    >
                      الملف الشخصي
                    </Link>
                    <NotificationBell />
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

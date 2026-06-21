import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-700"></div>

            <div>
              <h1 className="font-bold text-green-700 text-xl">
                Verdant
              </h1>
              <p className="text-sm text-gray-500">
                Agri Edutech
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">

            <Link to="/">Home</Link>

            <Link to="/courses">Courses</Link>

            <Link to="/mocktests">Mock Tests</Link>

            <Link to="/dashboard">Dashboard</Link>

            <Link
              to="/login"
              className="bg-green-700 text-white px-5 py-2 rounded-lg"
            >
              Login
            </Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t">

            <div className="flex flex-col gap-4 pt-4">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/courses"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </Link>

              <Link
                to="/mocktests"
                onClick={() => setMenuOpen(false)}
              >
                Mock Tests
              </Link>

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="bg-green-700 text-white px-4 py-2 rounded-lg text-center"
              >
                Login / Register
              </Link>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-white border-b">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-green-700"></div>

          <div>
            <h1 className="font-bold text-green-700 text-xl">
              Verdant
            </h1>

            <p className="text-gray-500 text-sm">
              Agri Edutech
            </p>
          </div>

        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/mocktests">Mock Tests</a>
          <a href="#">Study Materials</a>
          <a href="#">Current Affairs</a>
          <a href="#">About Us</a>

        </div>

        <Link
          to="/login"
          className="bg-green-700 text-white px-6 py-2 rounded-lg"
        >
          Login / Register
        </Link>

      </div>

    </nav>
  );
}
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function MockHome() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Choose Your Section
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Live Exams */}

          <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold text-red-500 mb-4">
              LIVE EXAMS
            </h2>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Upcoming Exams</li>
              <li>Exam Calendar</li>
              <li>Results & Rankings</li>
            </ul>

            <Link
              to="/mocktests/live"
              className="block text-center bg-red-500 text-white py-3 rounded-lg"
            >
              Go to Live Exams
            </Link>

          </div>

          {/* PYQ */}

          <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold text-blue-600 mb-4">
              PYQ MOCK TESTS
            </h2>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li>PYQ Bundles</li>
              <li>Year Wise Papers</li>
              <li>Subject Wise Papers</li>
            </ul>

            <Link
              to="/mocktests/pyq"
              className="block text-center bg-blue-600 text-white py-3 rounded-lg"
            >
              Go to PYQ Tests
            </Link>

          </div>

          {/* Test Series */}

          <div className="bg-white border rounded-xl p-6">

            <h2 className="text-xl font-bold text-green-700 mb-4">
              MOCK TEST SERIES
            </h2>

            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Test Series Bundles</li>
              <li>Chapter Tests</li>
              <li>Full Length Tests</li>
            </ul>

            <Link
              to="/mocktests/series"
              className="block text-center bg-green-700 text-white py-3 rounded-lg"
            >
              Go to Test Series
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}
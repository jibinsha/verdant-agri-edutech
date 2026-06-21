import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      <div className="grid lg:grid-cols-2 bg-white shadow-xl rounded-3xl overflow-hidden max-w-6xl w-full">

        {/* Left */}

        <div className="bg-green-700 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-6 text-green-100">

            Access your courses, mock tests,
            PYQ bundles and performance analytics.

          </p>

        </div>

        {/* Right */}

        <div className="p-12">

          <h2 className="text-3xl font-bold mb-8">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button className="w-full bg-green-700 text-white py-3 rounded-lg">

            Login

          </button>

          <div className="mt-6 text-center">

            <Link
              to="/forgot-password"
              className="text-green-700"
            >
              Forgot Password?
            </Link>

          </div>

          <div className="mt-6 text-center">

            Don't have an account?

            <Link
              to="/register"
              className="text-green-700 ml-2"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
import Navbar from "../../components/Navbar";
import {
  FaBook,
  FaClipboardList,
  FaCertificate,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen">

        <div className="max-w-7xl mx-auto p-6">

          <div className="grid lg:grid-cols-4 gap-6">

            {/* Sidebar */}

            <div className="bg-white rounded-xl shadow p-5 h-fit">

              <div className="text-center mb-6">

                <div className="w-20 h-20 bg-green-700 rounded-full mx-auto"></div>

                <h2 className="mt-4 font-bold text-xl">
                  Student Name
                </h2>

                <p className="text-gray-500 text-sm">
                  ICAR JRF Aspirant
                </p>

              </div>

              <div className="space-y-4">

                <div className="flex items-center gap-3 cursor-pointer hover:text-green-700">
                  <FaBook />
                  My Courses
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-green-700">
                  <FaClipboardList />
                  Mock Tests
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-green-700">
                  <FaCertificate />
                  Certificates
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-green-700">
                  <FaUser />
                  Profile
                </div>

                <div className="flex items-center gap-3 cursor-pointer hover:text-green-700">
                  <FaCog />
                  Settings
                </div>

                <div className="flex items-center gap-3 text-red-500 cursor-pointer">
                  <FaSignOutAlt />
                  Logout
                </div>

              </div>

            </div>

            {/* Main Content */}

            <div className="lg:col-span-3">

              {/* Welcome */}

              <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h1 className="text-3xl font-bold">
                  Welcome Back 👋
                </h1>

                <p className="text-gray-500 mt-2">
                  Continue your preparation journey.
                </p>

              </div>

              {/* Stats */}

              <div className="grid md:grid-cols-4 gap-4 mb-6">

                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-gray-500">
                    Courses
                  </h3>
                  <p className="text-3xl font-bold text-green-700">
                    3
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-gray-500">
                    Tests
                  </h3>
                  <p className="text-3xl font-bold text-green-700">
                    28
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-gray-500">
                    Avg Score
                  </h3>
                  <p className="text-3xl font-bold text-green-700">
                    82%
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow p-5">
                  <h3 className="text-gray-500">
                    Rank
                  </h3>
                  <p className="text-3xl font-bold text-green-700">
                    125
                  </p>
                </div>

              </div>

              {/* My Courses */}

              <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-2xl font-bold mb-4">
                  My Courses
                </h2>

                <div className="space-y-4">

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <span>ICAR JRF Complete Course</span>
                      <span>65%</span>
                    </div>

                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-700 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <span>ASRB NET Course</span>
                      <span>40%</span>
                    </div>

                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-700 h-2 rounded-full w-2/5"></div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Performance */}

              <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-2xl font-bold mb-4">
                  Performance Analytics
                </h2>

                <div className="grid md:grid-cols-4 gap-4">

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">
                      Best Subject
                    </h3>
                    <p>Agronomy</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">
                      Weak Subject
                    </h3>
                    <p>Soil Science</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">
                      Percentile
                    </h3>
                    <p>94%</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold">
                      Accuracy
                    </h3>
                    <p>82%</p>
                  </div>

                </div>

              </div>

              {/* Upcoming Exams */}

              <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold mb-4">
                  Upcoming Live Exams
                </h2>

                <div className="space-y-4">

                  <div className="border rounded-lg p-4">
                    ICAR JRF Grand Test – 25 July 2026
                  </div>

                  <div className="border rounded-lg p-4">
                    ASRB NET Mega Test – 05 Aug 2026
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";

export default function CourseDetails() {

  const { id } = useParams();

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt=""
              className="rounded-2xl w-full h-[350px] object-cover"
            />

            <h1 className="text-4xl font-bold mt-6">
              ICAR JRF Complete Course
            </h1>

            <p className="text-gray-600 mt-4">

              Complete preparation course for ICAR JRF.
              Includes lectures, notes, PYQs,
              assignments and mock tests.

            </p>

            <div className="mt-8">

              <h2 className="font-bold text-2xl mb-4">
                Course Content
              </h2>

              <div className="space-y-3">

                <div className="border rounded-lg p-4">
                  Module 1 - Agronomy
                </div>

                <div className="border rounded-lg p-4">
                  Module 2 - Soil Science
                </div>

                <div className="border rounded-lg p-4">
                  Module 3 - Genetics
                </div>

                <div className="border rounded-lg p-4">
                  Module 4 - Horticulture
                </div>

              </div>

            </div>

          </div>

          <div>

            <div className="bg-white border rounded-2xl p-6 sticky top-10">

              <h2 className="text-4xl font-bold text-green-700">
                ₹4,999
              </h2>

              <button className="w-full mt-6 bg-green-700 text-white py-3 rounded-lg">

                Buy Now

              </button>

              <button className="w-full mt-3 border border-green-700 text-green-700 py-3 rounded-lg">

                Enroll Now

              </button>

              <div className="mt-8 space-y-3 text-gray-600">

                <p>✔ 120 Lectures</p>
                <p>✔ Study Materials</p>
                <p>✔ Topic Notes</p>
                <p>✔ Mock Tests</p>
                <p>✔ Previous Year Papers</p>
                <p>✔ Assignments</p>
                <p>✔ Certificate</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
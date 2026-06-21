import Navbar from "../../components/Navbar";

export default function PYQDetails() {
  const papers = [
    "2025 Paper",
    "2024 Paper",
    "2023 Paper",
    "2022 Paper",
    "2021 Paper",
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-4 gap-6">

          {/* Left Sidebar */}

          <div className="bg-white border rounded-xl p-4">

            <h2 className="font-bold mb-4">
              ICAR JRF PYQ Bundle
            </h2>

            <div className="space-y-2">

              {papers.map((paper, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 rounded-lg hover:bg-green-100"
                >
                  {paper}
                </button>
              ))}

            </div>

          </div>

          {/* Main Content */}

          <div className="lg:col-span-3 bg-white border rounded-xl p-8">

            <h1 className="text-3xl font-bold">
              ICAR JRF 2025 Paper
            </h1>

            <div className="flex gap-8 mt-6 text-gray-600">

              <span>Total Questions: 120</span>
              <span>Duration: 2 Hours</span>
              <span>Max Marks: 240</span>

            </div>

            <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-lg">
              Start Test
            </button>

            <div className="mt-10">

              <h2 className="font-bold mb-4">
                Instructions
              </h2>

              <ul className="space-y-2 text-gray-600">

                <li>All questions are compulsory.</li>
                <li>Each correct answer carries 2 marks.</li>
                <li>Negative marking as per exam rules.</li>
                <li>Review answers before submission.</li>

              </ul>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
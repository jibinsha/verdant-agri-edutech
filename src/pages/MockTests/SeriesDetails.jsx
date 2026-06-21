import Navbar from "../../components/Navbar";

export default function SeriesDetails() {

  const tests = [
    {
      name: "Chapter-wise Tests",
      count: 20
    },
    {
      name: "Subject-wise Tests",
      count: 15
    },
    {
      name: "Full Length Tests",
      count: 15
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          ICAR JRF Test Series
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {tests.map((test, index) => (

            <div
              key={index}
              className="bg-white border rounded-xl p-6"
            >

              <h2 className="text-xl font-bold">
                {test.name}
              </h2>

              <p className="mt-3 text-gray-500">
                {test.count} Tests Available
              </p>

              <button className="mt-6 w-full bg-green-700 text-white py-3 rounded-lg">
                Start Practice
              </button>

            </div>

          ))}

        </div>

        {/* Analytics */}

        <div className="mt-10 bg-white border rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-4">
            Bundle Features
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <h3 className="font-semibold">
                Chapter Tests
              </h3>
            </div>

            <div>
              <h3 className="font-semibold">
                Subject Tests
              </h3>
            </div>

            <div>
              <h3 className="font-semibold">
                Full Length Tests
              </h3>
            </div>

            <div>
              <h3 className="font-semibold">
                Detailed Analytics
              </h3>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
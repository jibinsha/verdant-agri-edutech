import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
export default function SeriesBundles() {

  const bundles = [
    {
      name: "ICAR JRF Test Series",
      tests: 50,
      price: "₹499"
    },
    {
      name: "ASRB NET Test Series",
      tests: 40,
      price: "₹449"
    },
    {
      name: "GATE GE Test Series",
      tests: 60,
      price: "₹549"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Mock Test Series Bundles
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {bundles.map((bundle, index) => (

            <div
              key={index}
              className="bg-white border rounded-xl p-6"
            >

              <h2 className="font-bold text-lg">
                {bundle.name}
              </h2>

              <p className="mt-2 text-gray-500">
                {bundle.tests} Tests
              </p>

              <p className="mt-4 text-green-700 text-2xl font-bold">
                {bundle.price}
              </p>

              <Link
                to="/mocktests/series/1"
                className="block text-center mt-5 bg-green-700 text-white py-3 rounded-lg"
              >
                Buy Now
              </Link>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}
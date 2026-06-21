import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function PYQBundles() {

  const bundles = [
    {
      id: 1,
      name: "ICAR JRF PYQ Bundle",
      papers: 5,
      price: "₹299"
    },
    {
      id: 2,
      name: "ASRB NET PYQ Bundle",
      papers: 5,
      price: "₹249"
    },
    {
      id: 3,
      name: "GATE GE PYQ Bundle",
      papers: 5,
      price: "₹299"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          PYQ Mock Test Bundles
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {bundles.map(bundle => (

            <div
              key={bundle.id}
              className="bg-white border rounded-xl p-6"
            >

              <h2 className="font-bold text-lg">
                {bundle.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {bundle.papers} Papers
              </p>

              <p className="text-green-700 text-2xl font-bold mt-4">
                {bundle.price}
              </p>

              <Link
                to={`/mocktests/pyq/${bundle.id}`}
                className="block text-center bg-green-700 text-white py-3 rounded-lg mt-5"
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
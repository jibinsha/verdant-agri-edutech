export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[500px]">

        <h1 className="text-3xl font-bold mb-8">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          placeholder="Mobile Number"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-green-700 text-white py-3 rounded-lg">

          Register

        </button>

      </div>

    </div>
  );
}
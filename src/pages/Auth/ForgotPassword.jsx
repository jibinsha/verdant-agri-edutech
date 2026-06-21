export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg w-[450px]">

        <h1 className="text-3xl font-bold mb-6">
          Reset Password
        </h1>

        <input
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="w-full bg-green-700 text-white py-3 rounded-lg">
          Send Reset Link
        </button>

      </div>

    </div>
  );
}
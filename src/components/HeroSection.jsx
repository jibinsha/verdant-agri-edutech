export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-6xl font-bold leading-tight">

            Empowering

            <span className="block text-green-700">
              Agriculture Aspirants
            </span>

            for Success

          </h1>

          <p className="mt-6 text-gray-600 text-lg">

            Prepare for ICAR JRF, ASRB NET,
            GATE GE and PSC Agriculture Exams.

          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-green-700 text-white px-8 py-3 rounded-lg">
              Explore Courses
            </button>

            <button className="border border-green-700 text-green-700 px-8 py-3 rounded-lg">
              Start Mock Test
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="/student.png"
            alt=""
            className="w-[450px] rounded-3xl"
          />

        </div>

      </div>

    </section>
  );
}
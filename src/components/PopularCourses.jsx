const courses = [
  {
    title: "ICAR JRF",
    price: "₹4,999",
  },
  {
    title: "ASRB NET",
    price: "₹4,499",
  },
  {
    title: "GATE GE",
    price: "₹5,499",
  },
  {
    title: "Agriculture Officer",
    price: "₹3,499",
  },
];

export default function PopularCourses() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Popular Courses
        </h2>

        <button className="text-green-700 font-semibold">
          View All
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-6">

        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-white border rounded-xl overflow-hidden shadow-sm"
          >

            <div className="h-40 bg-green-100"></div>

            <div className="p-4">

              <h3 className="font-semibold">
                {course.title}
              </h3>

              <p className="text-green-700 font-bold mt-3">
                {course.price}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
import Navbar from "../../components/Navbar";
import CourseCard from "../../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "ICAR JRF Complete Course",
    lectures: 120,
    price: "₹4,999",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
  },
  {
    id: 2,
    title: "ASRB NET Complete Course",
    lectures: 100,
    price: "₹4,499",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399"
  },
  {
    id: 3,
    title: "GATE GE Complete Course",
    lectures: 150,
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef"
  },
  {
    id: 4,
    title: "Agriculture Officer Course",
    lectures: 80,
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  }
];

export default function Courses() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          All Courses
        </h1>

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="bg-white border rounded-xl p-5">

            <h2 className="font-bold mb-4">
              Categories
            </h2>

            <div className="space-y-3 text-gray-600">

              <p>ICAR JRF</p>
              <p>ASRB NET</p>
              <p>GATE GE</p>
              <p>Agriculture Officer</p>
              <p>GIS & Remote Sensing</p>

            </div>

          </div>

          <div className="lg:col-span-3">

            <div className="grid md:grid-cols-3 gap-6">

              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  );
}
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.id}`}>

      <div className="bg-white rounded-xl border hover:shadow-lg transition overflow-hidden">

        <img
          src={course.image}
          alt=""
          className="h-40 w-full object-cover"
        />

        <div className="p-4">

          <h3 className="font-bold text-lg">
            {course.title}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {course.lectures} Lectures
          </p>

          <p className="mt-3 text-green-700 font-bold text-xl">
            {course.price}
          </p>

        </div>

      </div>

    </Link>
  );
}
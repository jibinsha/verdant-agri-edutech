import Navbar from "../../components/Navbar";

export default function LiveExams() {

  const exams = [
    {
      name: "ICAR JRF Grand Test",
      date: "25 July 2026",
      duration: "2 Hours",
      questions: 120
    },
    {
      name: "ASRB NET Mega Test",
      date: "05 Aug 2026",
      duration: "2 Hours",
      questions: 150
    },
    {
      name: "GATE GE National Test",
      date: "12 Aug 2026",
      duration: "3 Hours",
      questions: 130
    }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold mb-8">
          Live Exams
        </h1>

        <div className="bg-white border rounded-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4 text-left">Exam</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Questions</th>
                <th>Action</th>
              </tr>

            </thead>

            <tbody>

              {exams.map((exam, index) => (

                <tr key={index} className="border-t">

                  <td className="p-4">{exam.name}</td>
                  <td>{exam.date}</td>
                  <td>{exam.duration}</td>
                  <td>{exam.questions}</td>

                  <td>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Register
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}
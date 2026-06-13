import { useEffect, useState } from "react";
import { getDepartments } from "../services/departmentService";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading Departments...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-700">
            Our Specialized Departments
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare through specialized
            departments staffed by experienced professionals.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {departments.map((department) => (
            <div
              key={department.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={department.image}
                alt={department.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700">
                  {department.name}
                </h2>

                <p className="mt-3 text-gray-600">
                  {department.description}
                </p>

                <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Departments;
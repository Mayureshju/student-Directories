import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { removeStudent } from "../store/slice/studentSlice";

function StudentTable() {
  const students = useSelector((store) => store.student);
  const dispatch = useDispatch();
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const searchData = students.filter((student) =>
        student.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredStudents(searchData);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText, students]);
  
  const handleDelete = (studentId) => {
    dispatch(removeStudent(studentId));
  };

  return (
    <div>
      <div className="mt-4 mb-4">
        <input
          className="border border-gray-300 rounded-lg ml-4 px-20 py-2"
          type="text"
          placeholder="Search Student Name"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <h1>Student Table</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DOB
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Father Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredStudents.map((student) => (
            <tr key={student.studentId}>
              <td className="px-6 py-4 whitespace-nowrap flex items-center">
                <span className="mr-2">
                  <FaUserTie fontSize={20} />
                </span>
                {student.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.dateOfBirth}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.fatherName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{student.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDelete(student.studentId)}
                  className="text-red-500 hover:text-red-700"
                >
                  <AiTwotoneDelete fill={"red"} fontSize={22} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between ml-6 mr-6 mt-6">
        <div className="font-bold text-2xl">
          <Link to={"/"}>Student Directories</Link>
        </div>

        <div>
          <Link to="/addstudent">
            <button className="bg-green-600 px-8 py-3 flex items-center rounded-md text-white">
              <span className="mr-2">
                <AiOutlinePlus />
              </span>
              Add Student
            </button>
          </Link>
        </div>
      </div>
      <hr className="mt-4" />
      
    </div>
  );
};

export default Navbar;

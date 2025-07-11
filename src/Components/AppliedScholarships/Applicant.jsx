import React from "react";

const Applicant = ({ applicant, index }) => {
  const { university_name, scholarship_category, subject_category, photo } =
    applicant;
  return (
    <tr className="border-2 border-slate-200">
      <th>{index + 1}</th>
      <td>
        <img
          className="rounded-xl md:max-w-20 md:h-20 min-w-30 h-30 border-2 p-1 border-primary"
          src={photo}
          alt=""
        />
      </td>
      <td>{university_name}</td>
      <td>{scholarship_category}</td>
      <td>{subject_category}</td>
      <td>{}</td>
      <td>{}</td>
      <td>
        <div className="flex items-center gap-3">
          {/* Update Button */}
          {/* <Link to={`/updateMyTutorials/${myTutorials._id}`}>
                    <button className="bg-blue-700 p-2 rounded-sm text-white btn border-0">
                      <MdEdit className="text-xl" />
                    </button>
                  </Link> */}
          {/* Delete Button */}
          {/* <Link>
                    <button
                      onClick={() => handleDelete(myTutorials._id)}
                      className="bg-red-500 p-2 rounded-sm text-white btn border-0"
                    >
                      <MdDelete className="text-xl" />
                    </button>
                  </Link> */}
        </div>
      </td>
    </tr>
  );
};

export default Applicant;

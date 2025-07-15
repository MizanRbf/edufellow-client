import React from "react";
import { MdCancel, MdDelete } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

import FeedbackModal from "./FeedbackModal";

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
          {/* Details Button */}
          {/* <Link to={`/dashboard/scholarship2/${_id}`}> */}
          <button className="btn btn-outline btn-info flex items-center gap-2 text-info hover:text-white">
            <AiOutlineInfoCircle size={20} />
            Details
          </button>
          {/* </Link> */}

          {/* Feedback Button */}
          <FeedbackModal applicant={applicant}></FeedbackModal>

          {/* Cancel Button */}

          <button className="btn btn-outline btn-error flex items-center gap-2 text-red-600 hover:bg-red-600 hover:text-white">
            <MdCancel size={20} />
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Applicant;

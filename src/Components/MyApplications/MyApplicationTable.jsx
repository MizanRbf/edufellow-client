import React from "react";
import Modal from "./Modal";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import { FaInfoCircle } from "react-icons/fa";

const MyApplicationTable = ({ application, index }) => {
  const {
    university_name,
    university_address,
    subject_category,
    applying_degree,
    application_fees,
    service_charge,
    photo,
  } = application;

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
      <td>{university_address}</td>
      <td>Feedback</td>
      <td>{subject_category}</td>
      <td>{applying_degree}</td>
      <td>{application_fees}</td>
      <td>{service_charge}</td>
      <td>Status</td>

      <td>
        <div className="flex items-center gap-3">
          {/* Details Button */}
          <Link>
            <button className="bg-green-600 p-2 rounded-sm text-white btn border-0">
              <FaInfoCircle className="text-xl" />
            </button>
          </Link>

          {/* Edit Button */}
          <Link>
            <button className="bg-blue-700 p-2 rounded-sm text-white btn border-0">
              <MdEdit className="text-xl" />
            </button>
          </Link>

          {/* Cancel Button */}
          <Link>
            <button className="bg-red-500 p-2 rounded-sm text-white btn border-0">
              <MdDelete className="text-xl" />
            </button>
          </Link>

          {/* Review Button */}
          <Modal application={application}></Modal>
        </div>
      </td>
    </tr>
  );
};

export default MyApplicationTable;

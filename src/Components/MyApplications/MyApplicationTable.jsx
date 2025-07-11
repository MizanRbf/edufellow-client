import React from "react";

const MyApplicationTable = ({ application, index }) => {
  const { university_name, scholarship_category, subject_category, photo } =
    application;

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

          {/* Review Modal */}

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Add Review
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </td>
    </tr>
  );
};

export default MyApplicationTable;

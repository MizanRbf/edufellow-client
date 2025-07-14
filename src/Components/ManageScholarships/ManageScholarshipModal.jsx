import { MdEdit } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import ScholarModalBtn from "./ScholarModalBtn";
import UpdateForm from "./UpdateForm";
import axios from "axios";

const ManageScholarshipModal = ({ scholarship }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // handle Update
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const imageFile = formData.get("university_image");

    if (!imageFile || !imageFile.name) {
      alert("Please upload an image");
      return;
    }

    const imageFormData = new FormData();
    imageFormData.append("image", imageFile);

    // upload image and return image url

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      imageFormData
    );
    const image_url = res.data?.data?.display_url;

    const updatedScholarship = Object.fromEntries(formData.entries());
    updatedScholarship.university_image = image_url;
    updatedScholarship.university_world_rank = parseInt(
      updatedScholarship.university_world_rank
    );
    updatedScholarship.tuition_fees = parseInt(updatedScholarship.tuition_fees);
    updatedScholarship.application_fees = parseInt(
      updatedScholarship.application_fees
    );
    updatedScholarship.service_charge = parseInt(
      updatedScholarship.service_charge
    );

    // Update in Server

    try {
      const res = await axiosSecure.put(
        `/scholarship/${id}`,
        updatedScholarship
      );
      if (res.data.modifiedCount) {
        //Close modal after successful update
        document.getElementById(`scholarshipModal-${id}`).close();
        Swal.fire("Success!", "Scholarship updated successfully.", "success");
      } else {
        //Close modal after successful update
        document.getElementById(`scholarshipModal-${id}`).close();

        Swal.fire("No Changes", "No update was made.", "info");
      }
      queryClient.invalidateQueries(["allScholarships"]);
    } catch (err) {
      //Close modal after successful update
      document.getElementById(`scholarshipModal-${id}`).close();
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div>
      <button
        className="bg-blue-700 p-2 rounded-sm text-white btn border-0"
        onClick={() =>
          document
            .getElementById(`scholarshipModal-${scholarship._id}`)
            .showModal()
        }
      >
        <MdEdit className="text-xl" />
      </button>

      {/* Dialog */}
      <dialog id={`scholarshipModal-${scholarship._id}`} className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-primary">Update Your Scholarship</h2>
          <form onSubmit={(e) => handleUpdate(e, scholarship._id)}>
            {/* Update Form */}
            <UpdateForm scholarship={scholarship}></UpdateForm>

            {/* Action button */}
            <ScholarModalBtn scholarship={scholarship}></ScholarModalBtn>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageScholarshipModal;

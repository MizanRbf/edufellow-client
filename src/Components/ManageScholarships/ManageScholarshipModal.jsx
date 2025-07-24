import { MdEdit } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import ScholarModalBtn from "./ScholarModalBtn";
import UpdateForm from "./UpdateForm";
import axios from "axios";
import { useState } from "react";

const ManageScholarshipModal = ({ scholarship }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isSaving, setIsSaving] = useState(false);

  // handle Update
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const imageFile = formData.get("university_image");

    setIsSaving(true);

    if (!imageFile || !imageFile.name) {
      document.getElementById(`scholarshipModal-${id}`).close(); // close modal first
      Swal.fire({
        icon: "warning",
        title: "Image Required",
        text: "Please upload an image before submitting.",
        confirmButtonColor: "#3085d6",
      });
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
        setIsSaving(false);
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
        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-sm text-sm transition cursor-pointer"
        onClick={() =>
          document
            .getElementById(`scholarshipModal-${scholarship._id}`)
            .showModal()
        }
      >
        <MdEdit className="text-xl" />
        Edit
      </button>

      {/* Dialog */}
      <dialog id={`scholarshipModal-${scholarship._id}`} className="modal">
        <div className="modal-box w-full lg:max-w-[1000px] md:max-w-[800px] max-w-[400px]">
          <h2 className="mb-4 text-primary text-center">
            Update Your Scholarship
          </h2>
          <form onSubmit={(e) => handleUpdate(e, scholarship._id)}>
            {/* Update Form */}
            <UpdateForm scholarship={scholarship}></UpdateForm>

            {/* Action button */}
            <ScholarModalBtn
              scholarship={scholarship}
              isSaving={isSaving}
            ></ScholarModalBtn>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ManageScholarshipModal;

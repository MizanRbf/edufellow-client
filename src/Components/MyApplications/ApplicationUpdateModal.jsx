import { MdEdit } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import ApplicationModalBtn from "./ApplicationModalBtn";
import AppUpdateForm from "./AppUpdateForm";
import axios from "axios";

const ApplicationUpdateModal = ({ application }) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // HandleUpdateForm
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const imageFile = formData.get("photo");

    if (!imageFile || !imageFile.name) {
      alert("Please Upload an Image");
      return;
    }

    // Converted into FormData
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

    const updatedApplication = Object.fromEntries(formData.entries());
    updatedApplication.photo = image_url;
    updatedApplication.phone = parseFloat(updatedApplication.phone);
    updatedApplication.ssc_result = parseFloat(updatedApplication.ssc_result);
    updatedApplication.hsc_result = parseFloat(updatedApplication.hsc_result);
    updatedApplication.user_name = user?.displayName;
    updatedApplication.user_email = user?.email;
    updatedApplication.date = new Date();

    // Save updatedApplication in DB
    try {
      const res = await axiosSecure.put(
        `/myApplication/${id}`,
        updatedApplication
      );
      if (res.data.modifiedCount) {
        Swal.fire("Success!", "Application updated successfully.", "success");
      } else {
        Swal.fire("No Changes", "No update was made.", "info");
      }
      queryClient.invalidateQueries(["applications"]);
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div>
      <button
        className="bg-blue-700 p-2 rounded-sm text-white btn border-0"
        onClick={() =>
          document
            .getElementById(`applicationModal-${application._id}`)
            .showModal()
        }
      >
        <MdEdit className="text-xl" />
      </button>
      <dialog id={`applicationModal-${application._id}`} className="modal">
        <div className="modal-box">
          <h2 className="mb-4 text-primary">Update Your application</h2>

          {/* Update Application */}

          <AppUpdateForm
            application={application}
            handleUpdate={handleUpdate}
          ></AppUpdateForm>

          {/* Action button */}
          <ApplicationModalBtn application={application}></ApplicationModalBtn>
        </div>
      </dialog>
    </div>
  );
};

export default ApplicationUpdateModal;

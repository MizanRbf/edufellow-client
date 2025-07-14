import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import UpdateMyApplicationForm from "./UpdateMyApplicationForm";
import axios from "axios";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

const UpdateMyApplication = () => {
  const applicationInfo = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // handle Update
  const handleUpdate = async (e) => {
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

    const updatedInfo = Object.fromEntries(formData.entries());
    updatedInfo.photo = image_url;
    updatedInfo.phone = parseFloat(updatedInfo.phone);
    updatedInfo.ssc_result = parseFloat(updatedInfo.ssc_result);
    updatedInfo.hsc_result = parseFloat(updatedInfo.hsc_result);
    updatedInfo.date = new Date();

    // Save applicantsInfo in DB
    try {
      const res = await axiosSecure.put(
        `/myApplication/${applicationInfo._id}`,
        updatedInfo
      );
      if (res.data.modifiedCount) {
        Swal.fire("Success!", "Application updated successfully.", "success");
        navigate("/dashboard/myApplication");
      } else {
        Swal.fire("No Changes", "No update was made.", "info");
      }
      queryClient.invalidateQueries(["myApplication"]);
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div>
      <h1>Update Your Application</h1>
      <UpdateMyApplicationForm
        handleUpdate={handleUpdate}
        applicationInfo={applicationInfo}
      ></UpdateMyApplicationForm>
    </div>
  );
};

export default UpdateMyApplication;

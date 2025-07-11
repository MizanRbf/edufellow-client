import React, { useState } from "react";
import AppFromPage from "../../Components/ApplicationForm/AppFromPage";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const ApplicationForm = () => {
  const { scholarshipId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // Load Scholarship
  const { data: scholarshipInfo, isPending } = useQuery({
    queryKey: ["scholarship", scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarship/${scholarshipId}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loader></Loader>;
  }

  const universityName = scholarshipInfo?.university_name;
  const scholarshipCategory = scholarshipInfo?.scholarship_category;
  const subjectCategory = scholarshipInfo?.subject_category;

  // HandleSubmitForm
  const handleSubmit = async (e) => {
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

    const applicantsInfo = Object.fromEntries(formData.entries());
    applicantsInfo.photo = image_url;
    applicantsInfo.phone = parseFloat(applicantsInfo.phone);
    applicantsInfo.ssc_result = parseFloat(applicantsInfo.ssc_result);
    applicantsInfo.hsc_result = parseFloat(applicantsInfo.hsc_result);
    applicantsInfo.user_name = user?.displayName;
    applicantsInfo.user_email = user?.email;
    applicantsInfo.user_id = localStorage.getItem("user_id");
    applicantsInfo.scholarship_id = scholarshipInfo?._id;
    applicantsInfo.date = new Date();

    // Save applicantsInfo in DB
    try {
      const res = await axiosSecure.post("/applicants", applicantsInfo);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Proceed to Payment!",
          icon: "success",
          draggable: true,
        });
      }
      form.reset();
      navigate(`/payment/${scholarshipId}`);
    } catch (err) {
      setErrorMessage(err.message);

      Swal.fire({
        icon: "error",
        title: errorMessage,
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="mb-8">Fill Up the Application Form</h1>
        <AppFromPage
          handleSubmit={handleSubmit}
          universityName={universityName}
          scholarshipCategory={scholarshipCategory}
          subjectCategory={subjectCategory}
        ></AppFromPage>
      </div>
    </div>
  );
};

export default ApplicationForm;

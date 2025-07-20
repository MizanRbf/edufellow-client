import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import Loader from "../../Shared/Loader";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import AppFormPage from "../../Components/ApplicationForm/AppFromPage";
import { warning } from "motion";

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

  // ScholarShipInfo
  const universityName = scholarshipInfo?.university_name;
  const scholarshipName = scholarshipInfo?.scholarship_name;
  const scholarshipCategory = scholarshipInfo?.scholarship_category;
  const subjectCategory = scholarshipInfo?.subject_category;

  // HandleSubmitForm
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const imageFile = formData.get("photo");

    if (!imageFile || !imageFile.name) {
      Swal.fire({
        icon: "warning",
        title: "Missing Image",
        text: "Please upload an image before submitting.",
        confirmButtonText: "OK",
      });
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
    applicantsInfo.university_address = `${
      scholarshipInfo?.university_city || ""
    }, ${scholarshipInfo?.university_country || ""}`;
    applicantsInfo.application_fees = parseInt(
      scholarshipInfo?.application_fees
    );
    applicantsInfo.status = "pending";
    applicantsInfo.feedback = "no feedback yet";
    applicantsInfo.service_charge = parseInt(scholarshipInfo?.service_charge);
    applicantsInfo.scholarship_id = scholarshipInfo?._id;
    applicantsInfo.applied_date = new Date();
    applicantsInfo.scholarship_deadline = scholarshipInfo.application_deadline;

    // Save applicantsInfo in DB
    try {
      const res = await axiosSecure.post("/applicants", applicantsInfo);
      if (res.data?.success === false) {
        Swal.fire({
          icon: "warning",
          title: "Duplicate Application",
          text: res.data.message || "You already applied for this scholarship.",
        });
        return;
      }

      if (res.data?.success && res.data?.data?.insertedId) {
        Swal.fire({
          title: res.data.message || "Proceed to Payment!",
          icon: "success",
          confirmButtonText: "Proceed to payment",
        });

        form.reset();
        navigate(`/payment/${scholarshipId}`);
      }
    } catch (err) {
      const serverMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";

      Swal.fire({
        icon: "error",
        title: "Application Failed",
        text: serverMessage,
        footer: '<a href="#">Why do I have this issue?</a>',
      });

      setErrorMessage(serverMessage); // Optional
    }
  };

  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="mb-8">Fill Up the Application Form</h1>
        <AppFormPage
          handleSubmit={handleSubmit}
          universityName={universityName}
          scholarshipCategory={scholarshipCategory}
          scholarshipName={scholarshipName}
          subjectCategory={subjectCategory}
        ></AppFormPage>
      </div>
    </div>
  );
};

export default ApplicationForm;

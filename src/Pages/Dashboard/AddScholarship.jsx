import React from "react";
import AddForm from "../../Components/Dashboard/RightSide/AddScholarship/AddForm";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddScholarship = () => {
  // handleSubmitScholarship
  const handleSubmitScholarship = async (e) => {
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

    const scholarshipData = Object.fromEntries(formData.entries());
    scholarshipData.university_image = image_url;
    scholarshipData.university_world_rank = parseInt(
      scholarshipData.university_world_rank
    );
    scholarshipData.tuition_fees = parseInt(scholarshipData.tuition_fees);
    scholarshipData.application_fees = parseInt(
      scholarshipData.application_fees
    );
    scholarshipData.service_charge = parseInt(scholarshipData.service_charge);

    // Add scholarship data to DB
    axios
      .post("https://edufellow-server.vercel.app/scholarships", scholarshipData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Scholarship Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Helmet>
        <title>Add Scholarship || Edufellow</title>
      </Helmet>
      <div className="m-6 md:m-10 p-6 md:p-10 bg-white rounded-lg shadow-2xl border border-gray-100 relative z-0">
        {/* Title Section */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-block">
            <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 shadow-xl rounded-md"></div>
            <h1 className="relative text-white text-3xl md:text-4xl font-bold tracking-wide uppercase px-8 py-4">
              Fill the Form
            </h1>
          </div>
        </div>

        {/* Form Component */}
        <AddForm handleSubmitScholarship={handleSubmitScholarship} />
      </div>
    </div>
  );
};

export default AddScholarship;

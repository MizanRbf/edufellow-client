import React from "react";
import AddForm from "../../Components/Dashboard/RightSide/AddScholarship/AddForm";
import axios from "axios";
import Swal from "sweetalert2";

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
      .post("http://localhost:3000/scholarships", scholarshipData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tutorials Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* Add Form */}
      <div className="m-6 p-4 shadow-lg">
        <h1>Fill the Form</h1>
        <AddForm handleSubmitScholarship={handleSubmitScholarship}></AddForm>
      </div>
    </div>
  );
};

export default AddScholarship;

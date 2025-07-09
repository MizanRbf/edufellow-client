import React from "react";
import AddForm from "../../Components/Dashboard/RightSide/AddScholarship/AddForm";
import axios from "axios";
import Swal from "sweetalert2";

const AddScholarship = () => {
  // handleSubmitScholarship
  const handleSubmitScholarship = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const scholarshipData = Object.fromEntries(formData.entries());

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

import React from "react";
import AddForm from "../../Components/Dashboard/RightSide/AddScholarship/AddForm";

const AddScholarship = () => {
  // handleSubmitScholarship
  const handleSubmitScholarship = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const scholarshipData = Object.fromEntries(formData.entries());
    console.log(scholarshipData);
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

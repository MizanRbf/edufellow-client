import React from "react";

const AddForm = ({ handleSubmitScholarship }) => {
  return (
    <div>
      <form onSubmit={handleSubmitScholarship} className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Scholarship Name */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Scholarship Name</label>
            <input
              type="text"
              name="scholarship_name"
              className="input"
              placeholder="Scholarship Name"
            />
          </fieldset>

          {/* University Name */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Name</label>
            <input
              type="text"
              name="university_name"
              className="input"
              placeholder="University Name"
            />
          </fieldset>

          {/* University image */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Image</label>
            <input type="file" name="university_image" className="input" />
          </fieldset>
          {/* University Logo */}
          {/* <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Logo</label>
            <input type="file" name="university_logo" className="input" />
          </fieldset> */}

          {/* University Country */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Country</label>
            <input
              type="text"
              name="university_country"
              className="input"
              placeholder="University Country"
            />
          </fieldset>

          {/* University city */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University City</label>
            <input
              type="text"
              name="university_city"
              className="input"
              placeholder="University City"
            />
          </fieldset>

          {/* University World Rank */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">
              University World Rank
            </label>
            <input
              type="number"
              name="university_world_rank"
              className="input"
              placeholder="University World Rank"
            />
          </fieldset>

          {/* Subject Category */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Subject Category</label>
            <select
              type="text"
              name="subject_category"
              className="select"
              defaultValue="Choose a Subject Category"
            >
              <option disabled={true}>Choose a Subject Category</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </fieldset>

          {/* Scholarship Category */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Scholarship Category</label>
            <select
              type="text"
              name="scholarship_category"
              className="select"
              defaultValue="Pick a Scholarship Category"
            >
              <option disabled={true}>Choose a Scholarship Category</option>
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </fieldset>

          {/* Degree */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm ">Degree</label>
            <select
              type="text"
              name="degree"
              defaultValue="Choose a Degree"
              className="select"
            >
              <option disabled={true}>Choose a Degree</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </fieldset>

          {/* Tuition Fees */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Tuition fees</label>
            <input
              type="number"
              name="tuition_fees"
              className="input"
              placeholder="Tuition fees"
            />
          </fieldset>

          {/* Application Fees */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Application Fees</label>
            <input
              type="number"
              name="application_fees"
              className="input"
              placeholder="Application Fees"
            />
          </fieldset>

          {/* Service Charge */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Service Charge</label>
            <input
              type="number"
              name="service_charge"
              className="input"
              placeholder="Service Charge"
            />
          </fieldset>

          {/* Application Deadline */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Application Deadline</label>
            <input
              type="date"
              name="application_deadline"
              className="input"
              placeholder="Application Deadline"
            />
          </fieldset>

          {/* Scholarship Post Date */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">
              Scholarship Post Date
            </label>
            <input
              type="date"
              name="post_date"
              className="input"
              placeholder="Scholarship Post Date"
            />
          </fieldset>

          {/* Posted User Email */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Posted User Email</label>
            <input
              type="text"
              name="posted_user_email"
              className="input"
              placeholder="Posted User Email"
            />
          </fieldset>
          {/* Stipend */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Stipend</label>
            <input
              type="text"
              name="stipend"
              className="input"
              placeholder="Stipend"
            />
          </fieldset>
        </div>
        {/*Scholarship Description */}
        <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
          <label className="text-primary text-sm">
            Scholarship Description
          </label>
          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            className="border pl-2 rounded-sm"
          />
        </fieldset>
        <button
          type="submit"
          className="w-full bg-primary rounded-sm text-white py-2 cursor-pointer"
        >
          Add Scholarship
        </button>
      </form>
    </div>
  );
};

export default AddForm;

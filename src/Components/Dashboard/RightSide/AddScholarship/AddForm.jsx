import React from "react";

const AddForm = ({ handleSubmitScholarship }) => {
  const today = new Date().toISOString().split("T")[0];
  return (
    <div>
      <form onSubmit={handleSubmitScholarship} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Scholarship Name */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarship_name"
              placeholder="Scholarship Name"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* University Name */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              University Name
            </label>
            <input
              type="text"
              name="university_name"
              placeholder="University Name"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* University image */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              University Image
            </label>
            <input
              type="file"
              name="university_image"
              className="file-input w-full"
            />
          </fieldset>

          {/* University Country */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              University Country
            </label>
            <input
              type="text"
              name="university_country"
              className="input w-full"
              placeholder="University Country"
            />
          </fieldset>

          {/* University city */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              University City
            </label>
            <input
              type="text"
              name="university_city"
              className="input w-full"
              placeholder="University City"
            />
          </fieldset>

          {/* University World Rank */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              University World Rank
            </label>
            <input
              type="number"
              name="university_world_rank"
              className="input w-full"
              placeholder="University World Rank"
            />
          </fieldset>

          {/* Subject Category */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Subject Category
            </label>
            <select
              type="text"
              name="subject_category"
              className="select w-full"
              defaultValue="Choose a Subject Category"
            >
              <option disabled={true}>Choose a Subject Category</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Engineering">Engineering</option>
              <option value="Doctor">Doctor</option>
            </select>
          </fieldset>

          {/* Scholarship Category */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Scholarship Category
            </label>
            <select
              type="text"
              name="scholarship_category"
              className="select w-full"
              defaultValue="Pick a Scholarship Category"
            >
              <option disabled={true}>Choose a Scholarship Category</option>
              <option value="Full fund">Full fund</option>
              <option value="Partial">Partial</option>
              <option value="Self-fund">Self-fund</option>
            </select>
          </fieldset>

          {/* Degree */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400 ">Degree</label>
            <select
              type="text"
              name="degree"
              defaultValue="Choose a Degree"
              className="select w-full"
            >
              <option disabled={true}>Choose a Degree</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </fieldset>

          {/* Tuition Fees */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Tuition fees
            </label>
            <input
              type="number"
              name="tuition_fees"
              className="input w-full"
              placeholder="Tuition fees"
            />
          </fieldset>

          {/* Application Fees */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Application Fees
            </label>
            <input
              type="number"
              name="application_fees"
              className="input w-full"
              placeholder="Application Fees"
            />
          </fieldset>

          {/* Service Charge */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Service Charge
            </label>
            <input
              type="number"
              name="service_charge"
              className="input w-full"
              placeholder="Service Charge"
            />
          </fieldset>

          {/* Application Deadline */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Application Deadline
            </label>
            <input
              type="date"
              name="application_deadline"
              className="input w-full"
              placeholder="Application Deadline"
            />
          </fieldset>

          {/* Scholarship Post Date */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Scholarship Post Date
            </label>
            <input
              type="date"
              name="post_date"
              value={today}
              className="input w-full"
              readOnly
            />
          </fieldset>

          {/* Posted User Email */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">
              Posted User Email
            </label>
            <input
              type="text"
              name="posted_user_email"
              className="input w-full"
              placeholder="Posted User Email"
            />
          </fieldset>
          {/* Stipend */}
          <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
            <label className="text-sm font-medium text-gray-400">Stipend</label>
            <input
              type="text"
              name="stipend"
              className="input w-full"
              placeholder="Stipend"
            />
          </fieldset>
        </div>
        {/*Scholarship Description */}
        <fieldset className="flex flex-col gap-1 bg-[#00000070] p-4 rounded-md shadow-sm border border-gray-200">
          <label className="text-sm font-medium text-gray-400">
            Scholarship Description
          </label>
          <textarea
            rows={4}
            name="description"
            placeholder="Description"
            className="border pl-2 rounded-sm bg-white"
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

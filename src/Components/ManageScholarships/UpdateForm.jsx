import React from "react";

const UpdateForm = ({ scholarship, isSaving }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Input Field Generator */}
        {[
          { label: "Scholarship Name", name: "scholarship_name", type: "text" },
          { label: "University Name", name: "university_name", type: "text" },
          {
            label: "University Country",
            name: "university_country",
            type: "text",
          },
          { label: "University City", name: "university_city", type: "text" },
          {
            label: "University World Rank",
            name: "university_world_rank",
            type: "number",
          },
          { label: "Tuition Fees", name: "tuition_fees", type: "number" },
          {
            label: "Application Fees",
            name: "application_fees",
            type: "number",
          },
          { label: "Service Charge", name: "service_charge", type: "number" },
          {
            label: "Application Deadline",
            name: "application_deadline",
            type: "date",
          },
          { label: "Scholarship Post Date", name: "post_date", type: "date" },
          {
            label: "Posted User Email",
            name: "posted_user_email",
            type: "text",
          },
          { label: "Stipend", name: "stipend", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type={type}
              name={name}
              defaultValue={scholarship?.[name]}
              placeholder={label}
              className="input input-bordered rounded-sm w-full"
            />
          </div>
        ))}

        {/* File Upload */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            University Image
          </label>
          <input
            type="file"
            name="university_image"
            className="file-input w-full"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Subject Category
          </label>
          <select
            name="subject_category"
            defaultValue={scholarship?.subject_category}
            className="select select-bordered rounded-sm"
          >
            <option disabled>Choose a Subject Category</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Engineering">Engineering</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Scholarship Category
          </label>
          <select
            name="scholarship_category"
            defaultValue={scholarship?.scholarship_category}
            className="select select-bordered rounded-sm"
          >
            <option disabled>Choose a Scholarship Category</option>
            <option value="Full fund">Full fund</option>
            <option value="Partial">Partial</option>
            <option value="Self-fund">Self-fund</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Degree
          </label>
          <select
            name="degree"
            defaultValue={scholarship?.degree}
            className="select select-bordered rounded-sm"
          >
            <option disabled>Choose a Degree</option>
            <option value="Diploma">Diploma</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Masters">Masters</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <label className="text-sm font-medium text-gray-700 mb-1 block">
          Scholarship Description
        </label>
        <textarea
          rows={4}
          name="description"
          defaultValue={scholarship?.description}
          placeholder="Enter scholarship description..."
          className="textarea textarea-bordered w-full rounded-sm"
        />
      </div>
    </div>
  );
};

export default UpdateForm;

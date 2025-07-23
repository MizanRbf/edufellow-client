import React from "react";

const AppFormPage = ({
  handleSubmit,
  universityName,
  scholarshipName,
  scholarshipCategory,
  subjectCategory,
}) => {
  return (
    <div className="border rounded-md shadow-lg p-6 bg-white max-w-screen-xl mx-auto mb-10">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-primary mb-6">
          Scholarship Application Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Phone Number */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="input input-bordered w-full"
              placeholder="e.g., 01XXXXXXXXX"
            />
          </div>

          {/* Applicant Photo */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              className="file-input file-input-bordered w-full"
              accept="image/*"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2 xl:col-span-3">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              name="address"
              className="textarea textarea-bordered w-full"
              placeholder="Village, District, Country"
            ></textarea>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Gender
            </label>
            <select name="gender" className="select select-bordered w-full">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          {/* Applying Degree */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Applying Degree
            </label>
            <select
              name="applying_degree"
              className="select select-bordered w-full"
            >
              <option value="">Select Degree</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
          </div>

          {/* SSC Result */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              SSC Result (GPA)
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              name="ssc_result"
              className="input input-bordered w-full"
              placeholder="e.g., 5.00"
            />
          </div>

          {/* HSC Result */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              HSC Result (GPA)
            </label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              name="hsc_result"
              className="input input-bordered w-full"
              placeholder="e.g., 4.80"
            />
          </div>

          {/* Study Gap */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Study Gap (if any)
            </label>
            <select name="study_gap" className="select select-bordered w-full">
              <option value="">No Gap</option>
              <option value="1_year">1 Year</option>
              <option value="2_years">2 Years</option>
              <option value="3_or_more">3 or More Years</option>
            </select>
          </div>

          {/* Read-only Fields */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              University Name
            </label>
            <input
              type="text"
              name="university_name"
              value={universityName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Scholarship Name
            </label>
            <input
              type="text"
              name="scholarship_name"
              value={scholarshipName || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Scholarship Category
            </label>
            <input
              type="text"
              name="scholarship_category"
              value={scholarshipCategory || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Subject Category
            </label>
            <input
              type="text"
              name="subject_category"
              value={subjectCategory || ""}
              readOnly
              className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-right">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-sm text-lg transition duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppFormPage;

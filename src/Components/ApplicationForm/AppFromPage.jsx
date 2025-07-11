import React from "react";

const AppFromPage = ({
  handleSubmit,
  universityName,
  scholarshipCategory,
  subjectCategory,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Applicant's Phone Number */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="input"
              placeholder="e.g., 01XXXXXXXXX"
            />
          </fieldset>

          {/* Applicant Photo */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Photo</label>
            <input
              type="file"
              name="photo"
              className="file-input"
              accept="image/*"
            />
          </fieldset>

          {/* Address */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">
              Address (Village, District, Country)
            </label>
            <textarea
              name="address"
              className="textarea"
              placeholder="Village, District, Country"
            />
          </fieldset>

          {/* Gender Dropdown */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Gender</label>
            <select name="gender" className="select">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </fieldset>

          {/* Applying Degree Dropdown */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Applying Degree</label>
            <select name="applying_degree" className="select">
              <option value="">Select Degree</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
          </fieldset>

          {/* SSC Result */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">SSC Result (GPA)</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              name="ssc_result"
              className="input"
              placeholder="e.g., 5.00"
            />
          </fieldset>

          {/* HSC Result */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">HSC Result (GPA)</label>
            <input
              type="number"
              min="0"
              max="5"
              step="0.01"
              name="hsc_result"
              className="input"
              placeholder="e.g., 4.80"
            />
          </fieldset>

          {/* Study Gap (optional) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Study Gap (if any)</label>
            <select name="study_gap" className="select">
              <option value="">No Gap</option>
              <option value="1_year">1 Year</option>
              <option value="2_years">2 Years</option>
              <option value="3_or_more">3 or More Years</option>
            </select>
          </fieldset>

          {/* Read-Only Fields */}

          {/* University Name (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Name</label>
            <input
              type="text"
              name="university_name"
              className="input"
              value={universityName || ""}
              readOnly
            />
          </fieldset>

          {/* Scholarship Category (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Scholarship Category</label>
            <input
              type="text"
              name="scholarship_category"
              className="input"
              value={scholarshipCategory || ""}
              readOnly
            />
          </fieldset>

          {/* Subject Category (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Subject Category</label>
            <input
              type="text"
              name="subject_category"
              className="input"
              value={subjectCategory || ""}
              readOnly
            />
          </fieldset>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppFromPage;

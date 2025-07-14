import React from "react";

const UpdateMyApplicationForm = ({ handleUpdate, applicationInfo }) => {
  const {
    scholarship_category,
    scholarship_name,
    university_name,
    phone,
    photo,
    address,
    gender,
    applying_degree,
    ssc_result,
    hsc_result,
    study_gap,
    subject_category,
    user_name,
    user_email,
    university_address,
    application_fees,
    service_charge,
    date,
  } = applicationInfo;
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Applicant's Phone Number */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Phone Number</label>
            <input
              type="tel"
              defaultValue={phone}
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
              defaultValue={address}
              className="textarea"
              placeholder="Village, District, Country"
            />
          </fieldset>

          {/* Gender Dropdown */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Gender</label>
            <select name="gender" defaultValue={gender} className="select">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </fieldset>

          {/* Applying Degree Dropdown */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Applying Degree</label>
            <select
              name="applying_degree"
              defaultValue={applying_degree}
              className="select"
            >
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
              defaultValue={ssc_result}
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
              defaultValue={hsc_result}
              name="hsc_result"
              className="input"
              placeholder="e.g., 4.80"
            />
          </fieldset>

          {/* Study Gap (optional) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Study Gap (if any)</label>
            <select
              name="study_gap"
              defaultValue={study_gap}
              className="select"
            >
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
              value={university_name}
              readOnly
            />
          </fieldset>

          {/* University Address (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">University Address</label>
            <input
              type="text"
              name="university_address"
              className="input"
              value={university_address}
              readOnly
            />
          </fieldset>

          {/* Scholarship Name (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Scholarship Name</label>
            <input
              type="text"
              name="scholarship_name"
              className="input"
              value={scholarship_name}
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
              value={scholarship_category}
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
              value={subject_category}
              readOnly
            />
          </fieldset>

          {/* User Name  (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">User Name</label>
            <input
              type="text"
              name="user_name"
              className="input"
              value={user_name}
              readOnly
            />
          </fieldset>

          {/* User Email (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">User Email</label>
            <input
              type="email"
              name="user_email"
              className="input"
              value={user_email}
              readOnly
            />
          </fieldset>

          {/* Application Fee (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Application Fee</label>
            <input
              type="number"
              name="application_fees"
              className="input"
              value={application_fees}
              readOnly
            />
          </fieldset>

          {/* Service Charge (Read-Only) */}
          <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
            <label className="text-primary text-sm">Service Charge</label>
            <input
              type="text"
              name="service_charge"
              className="input"
              value={service_charge}
              readOnly
            />
          </fieldset>
        </div>
        <button
          type="submit"
          className="bg-secondary  py-3 px-6 text-white cursor-pointer"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateMyApplicationForm;

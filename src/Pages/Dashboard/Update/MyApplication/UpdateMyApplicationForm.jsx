import React from "react";

const UpdateMyApplicationForm = ({
  handleUpdate,
  applicationInfo,
  isSubmitting,
}) => {
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
    <div className="bg-white shadow-xl rounded-xl p-6 md:p-10">
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/* Example Input Field */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              defaultValue={phone}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="01XXXXXXXXX"
            />
          </fieldset>

          {/* Applicant Photo */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="file-input file-input-bordered w-full"
            />
          </fieldset>

          {/* Address */}
          <fieldset className="space-y-2 col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address (Village, District, Country)
            </label>
            <textarea
              name="address"
              defaultValue={address}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              rows="2"
            />
          </fieldset>

          {/* Gender */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              defaultValue={gender}
              className="select select-bordered w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </fieldset>

          {/* Applying Degree */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Applying Degree
            </label>
            <select
              name="applying_degree"
              defaultValue={applying_degree}
              className="select select-bordered w-full"
            >
              <option value="">Select Degree</option>
              <option value="diploma">Diploma</option>
              <option value="bachelor">Bachelor</option>
              <option value="masters">Masters</option>
            </select>
          </fieldset>

          {/* SSC & HSC */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              SSC Result (GPA)
            </label>
            <input
              type="number"
              name="ssc_result"
              defaultValue={ssc_result}
              step="0.01"
              max="5"
              className="input input-bordered w-full"
            />
          </fieldset>

          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              HSC Result (GPA)
            </label>
            <input
              type="number"
              name="hsc_result"
              defaultValue={hsc_result}
              step="0.01"
              max="5"
              className="input input-bordered w-full"
            />
          </fieldset>

          {/* Study Gap */}
          <fieldset className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Study Gap (if any)
            </label>
            <select
              name="study_gap"
              defaultValue={study_gap}
              className="select select-bordered w-full"
            >
              <option value="">No Gap</option>
              <option value="1_year">1 Year</option>
              <option value="2_years">2 Years</option>
              <option value="3_or_more">3 or More Years</option>
            </select>
          </fieldset>

          {/* Readonly Fields */}
          {[
            ["University Name", university_name],
            ["University Address", university_address],
            ["Scholarship Name", scholarship_name],
            ["Scholarship Category", scholarship_category],
            ["Subject Category", subject_category],
            ["User Name", user_name],
            ["User Email", user_email],
            ["Application Fee", application_fees],
            ["Service Charge", service_charge],
          ].map(([label, value], index) => (
            <fieldset className="space-y-2" key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                value={value}
                readOnly
              />
            </fieldset>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary-dark transition px-6 py-3 text-white font-semibold rounded-md shadow cursor-pointer"
          >
            {isSubmitting ? "saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMyApplicationForm;

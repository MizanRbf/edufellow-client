import React from "react";
import useAuth from "../../Hooks/useAuth";

const ProfileUpdate = () => {
  const { user, setUser, updateUser } = useAuth();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // Update User
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        form.reset();
      })
      .catch();
  };
  return (
    <div>
      <div className="flex flex-col justify-between">
        {/* Profile Name and Photo Update form */}

        <div className="">
          <form
            onSubmit={handleUpdateProfile}
            className="fieldset mx-4 border p-4 border-white mb-4"
          >
            <h4>Update Your Profile</h4>
            {/* Name */}
            <label className="label">Update Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter new name"
              required
            />
            {/* Photo */}
            <label className="label">Update Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter new photo url"
              required
            />
            <button
              type="submit"
              className="btn btn-primary bg- mt-4 text-white border-white"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;

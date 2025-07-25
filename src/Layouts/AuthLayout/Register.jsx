import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { ClockLoader } from "react-spinners";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 100 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Register = () => {
  const { createUser, updateUser } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Handle ShowPassword
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // Handle Register
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Password Validation
    if (password.length < 6) {
      return setErrorMessage("Password must be at least 6 characters long");
    }

    if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must include at least one uppercase letter."
      );
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      return setErrorMessage(
        "Password must include at least one special character"
      );
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };

    setLoading(false);

    try {
      // Step 1: Create User
      const userCredential = await createUser(email, password);
      console.log(userCredential);
      // Step 2: Update User Profile
      await updateUser(profile);

      // Step 3: Save user info to database
      const userInfo = {
        name,
        email,
        photo,
        role: "user",
      };
      const res = await axiosSecure.post("/user", userInfo);

      const insertedId = res.data;
      localStorage.setItem("user_id", insertedId._id);

      // Step 4: Navigate to login
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration Error:", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 my-10 md:my-0">
      <div className="card w-full max-w-xl  shadow-2xl bg-base-100">
        <div className="card-body">
          {/* Close Button */}
          <div className="flex justify-end">
            <Link to="/">
              <button className="hover:bg-gray-100 p-2 rounded-sm">
                <RxCross2 size={22} />
              </button>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img src="/assets/logo.png" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Title */}
          <div className="flex justify-center">
            <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
              <h4 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
                Register Your Account
              </h4>
            </div>
          </div>

          <hr className="text-[#e5e5e5] my-4" />

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Your Name"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="label">Photo</label>
              <input
                type="file"
                name="photo"
                className="file-input w-full"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Enter Your Password"
                  required
                />
                <div
                  className="absolute top-3 right-5 cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword ? (
                    <FaEye size={15} />
                  ) : (
                    <LuEyeClosed size={15} />
                  )}
                </div>
              </div>
            </div>

            {/* Error */}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              onClick={() => setLoading(true)}
              className="btn w-full mt-2 bg-primary text-white"
            >
              {loading ? <ClockLoader size={20} color="white" /> : "Register"}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

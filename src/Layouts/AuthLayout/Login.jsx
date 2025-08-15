import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../../Hooks/useAuth";
import { ClockLoader } from "react-spinners";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import RoleWiseLogin from "./RoleWiseLogin";

const Login = () => {
  const location = useLocation();
  const { loginUser, setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const from = location.state || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle ShowPassword
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");
    // login User
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })

      .catch((error) => setErrorMessage(error.message));
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 my-10 md:my-0">
      <div className="card w-full max-w-xl shadow-2xl bg-base-100">
        <div className="card-body relative">
          {/* Go Home */}
          <div className="flex justify-end">
            <Link to="/">
              <button className="hover:bg-gray-100 px-5 py-2 rounded-sm cursor-pointer">
                <RxCross2 size={22} />
              </button>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img src="/assets/logo.png" alt="Logo" className="w-32 h-auto" />
          </div>

          {/* Title */}
          <div className="flex justify-center ">
            <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
              <h4 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
                Login Your Account
              </h4>
            </div>
          </div>

          <hr className="text-[#e5e5e5] my-4" />

          {/* Form */}
          <form onSubmit={handleLogin} className="fieldset space-y-2">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full"
              placeholder="Email"
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full"
                name="password"
                value={password}
                placeholder="Password"
              />
              <div
                className="absolute top-3 right-5 cursor-pointer"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEye size={15} /> : <LuEyeClosed size={15} />}
              </div>
            </div>

            {/* Error */}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            {/* Submit Button */}
            <button
              onClick={() => setLoading(true)}
              type="submit"
              className="btn mt-4 button w-full"
            >
              {loading ? <ClockLoader size={20} color="white" /> : "Login"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center gap-3 my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="text-gray-600">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          <SocialLogin setErrorMessage={setErrorMessage} from={from} />

          {/* Register Link */}
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-red-500 hover:underline font-bold"
            >
              Register
            </Link>
          </p>

          {/* Role Wise Login */}
          <div className="absolute md:top-0  md:-right-43 -top-20 right-0">
            <RoleWiseLogin
              setEmail={setEmail}
              setPassword={setPassword}
            ></RoleWiseLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

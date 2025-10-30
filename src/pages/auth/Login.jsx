

import { useState } from "react";
import LoginImg from "../../assets/loginimg.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, password, rememberMe });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#7EC1B1] flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row bg-white  w-full max-w-6xl overflow-hidden">  
        {/* rounded-2xl shadow-lg */}
        
        {/* Right Side - Login Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-[#7EC1B1] order-2 lg:order-none">
          <img
            src={LoginImg}
            alt="Login Illustration"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>

        {/* Left Side - Login Form */}
        <div className="flex-1 px-6 md:px-10 py-10 md:py-20 flex flex-col justify-center items-center order-1 lg:order-none">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2 text-center">
            Welcome to Service Engineer Portal
          </h2>
          <p className="text-center md:text-left mb-6 text-gray-600">
            Please enter your registered email and password to continue
          </p>

          {/* Input Fields */}
          <div className="w-full max-w-md space-y-6">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg md:text-xl">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="h-14 md:h-16 text-black border p-3 rounded-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-lg md:text-xl">
                  Password
                </label>
                <Link
                  to="/forgetPassword"
                  className="text-sm md:text-base hover:underline text-blue-500"
                >
                  Forget Password?
                </Link>
              </div>
              <div className="relative w-full">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-14 md:h-16 text-gray-600 border px-4 w-full rounded-lg pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <label className="flex items-center space-x-2 text-sm md:text-base">
                <input
                  type="checkbox"
                  className="accent-violet-600"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span>Remember Me</span>
              </label>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full h-14 md:h-16 bg-[#7EC1B1] text-white rounded-lg mt-4 text-lg md:text-xl"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

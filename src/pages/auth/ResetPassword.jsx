// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import resetImage from "../../assets/reset-password.jpg"; // Your illustration image

// function ResetPassword() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword && password.length >= 6) {
//       // ✅ Perform your password reset logic here
//       navigate("/dashboard"); // Redirect after successful reset
//     } else {
//       alert("Passwords do not match or are too short (min 6 chars)");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#7EC1B1] p-4">
//       <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-12">

//         {/* Left Side: Illustration */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <img
//             src={resetImage}
//             alt="Reset Password"
//             className="w-80 h-auto object-contain"
//           />
//         </div>

//         {/* Right Side: Reset Password Form */}
//         <div className="w-full md:w-2xl flex justify-center">
//           <form
//             onSubmit={handleSubmit}
//             className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm"
//           >
//             <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
//               Reset Password
//             </h1>
//             <p className="text-center text-gray-500 mb-8">
//               Please enter new password.
//             </p>

//             {/* New Password */}
//             <div className="mb-4 relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="New Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
//               />
             
//             </div>

//             {/* Confirm Password */}
//             <div className="mb-6 relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full py-3 rounded-lg text-white font-semibold bg-[#7EC1B1]  transition-all duration-300"
//             >
//               Done
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ResetPassword;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import resetImage from "../../assets/amico.png"; 

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 6) {
      // ✅ Perform your password reset logic here
      navigate("/dashboard"); // Redirect after successful reset
    } else {
      alert("Passwords do not match or are too short (min 6 chars)");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#7EC1B1] p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl  overflow-hidden bg-white">

        {/* Left Side: Illustration */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12 bg-[#7EC1B1]">
          <img
            src={resetImage}
            alt="Reset Password"
            className="w-full max-w-xl h-auto object-contain"
          />
        </div>

        {/* Right Side: Reset Password Form */}
        <div className="flex-1 flex flex-col justify-center px-12 py-16 lg:py-24">
          <div className="max-w-md w-full mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#263138] mb-6 text-center">
              Reset Password
            </h1>
            <p className="text-gray-600 mb-12 text-center">
              Please enter your new password to continue.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* New Password */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-6 py-5 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-4 focus:ring-[#7EC1B1] transition"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-gray-700 font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-6 py-5 border border-gray-300 rounded-xl bg-gray-100 focus:outline-none focus:ring-4 focus:ring-[#7EC1B1] transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-5 bg-[#7EC1B1] text-white rounded-xl font-semibold hover:bg-[#68a998] transition"
              >
                Done
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;


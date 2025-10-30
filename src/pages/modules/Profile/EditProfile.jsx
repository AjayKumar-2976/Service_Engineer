import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header2 from "../../../components/ServiceEngineer/header/Header2";

const EditProfile = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: state?.name || "",
    skill: state?.skill || "",
    phone: state?.phone.replace("+91 ", "") || "",
    area: state?.area || "",
    password: state?.password || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Updated Data:", formData);
    navigate("/profile");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 sm:p-10 mt-6 w-full mx-auto">
    <Header2/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Skill
          </label>
          <select
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700"
          >
            <option>RO Installation & Uninstallation</option>
            <option>Plumbing Service</option>
            <option>Electrical Repair</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone No.
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Assigned Area
          </label>
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md px-4 py-3 text-gray-700"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSave}
          className="bg-[#7EC1B1] text-white px-8 py-3 rounded-md hover:bg-[#66b0a0] transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;

import React, { useState } from "react";

const Personalisation = () => {
  const [logo, setLogo] = useState(null);
  const [logoName, setLogoName] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
      setLogoName(file.name);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-2 min-h-screen">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-7 space-y-6">
        <div className="text-center">
          <div className="flex mb-4">
            <img
              src={logo || "https://via.placeholder.com/85"}
              alt="Uploaded Logo"
              className="w-[85px] h-[85px] rounded-[16px] border border-gray-300 shadow-md"
            />
          </div>
          <label className="text-[#212529] font-[Open Sans] text-sm font-semibold leading-[21.7px] block text-left">
            Upload Logo *
          </label>
          <p className="text-[#868E96] font-[Open Sans] text-xs font-normal leading-[18.6px] text-left">
            Upload a logo, PNG or JPG files are supported.
          </p>
          <input
            type="file"
            onChange={handleImageChange}
            className="block mx-auto w-full border border-customBlue rounded-md text-gray-700 p-2  sm:text-sm"
          />
        </div>
        <div>
          <label className="text-[#212529] font-[Open Sans] text-sm font-semibold leading-[21.7px] block text-left">
            Organisation Name *
          </label>
          <p className="text-[#868E96] font-[Open Sans] text-xs font-normal leading-[18.6px] text-left">
            Name of your organization
          </p>
          <input
            type="text"
            placeholder="Your Organisation"
            className="mt-2 block w-full border-customBlue border rounded-4 shadow-md sm:text-sm p-2"
          />
        </div>
        <div>
          <label className="text-[#212529] font-[Open Sans] text-sm font-semibold leading-[21.7px] block text-left">
            Industry *
          </label>
          <p className="text-[#868E96] font-[Open Sans] text-xs font-normal leading-[18.6px] text-left">
            Select the industry
          </p>
          <select
            className="mt-2 block w-full border border-customBlue rounded-lg shadow-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
            defaultValue=""
          >
            <option
              className="text-[#868E96] font-[Open Sans] text-xs font-normal leading-[18.6px]"
              value=""
              disabled
            >
              Select the Industry
            </option>
            <option>IT</option>
            <option>Retail</option>
            <option>Zookeeping</option>
            <option>Watch Making</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button className="w-32 h-10 rounded-[8px] border border-[#1A1B1E] bg-[#1A1B1E] text-white font-[Open Sans] font-semibold hover:bg-black transition duration-300 shadow-md">
            {/*<img src="./assets/images/check.png" />*/}
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalisation;

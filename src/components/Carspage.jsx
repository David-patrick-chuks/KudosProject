import React, { useState } from 'react';

const Carspage = () => {
  const [kmValue, setKmValue] = useState(500); // Default value for kilometers
  const [hourValue, setHourValue] = useState(30); // Default value for hours

  // Handle change for kilometers range
  const handleKmChange = (e) => {
    setKmValue(e.target.value);
  };

  // Handle change for hours range
  const handleHourChange = (e) => {
    setHourValue(e.target.value);
  };

  return (
    <div id='our-cars' className="p-4 md:p-8">
      <p className='text-center font-bold text-black mb-10'>
      A shared car is often cheaper than owning one <br /> car. Calculate your monthly costs at Cago here.
      </p>

      {/* Main Flexbox Container */}
      <div className="border border-gray-300 rounded-md flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300">

        {/* Left Side - Inputs */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between h-full gap-7">

          {/* Kilometers Section */}
          <div className="p-2 flex-grow flex flex-col space-y-4">
            <p className="text-green-700 font-semibold">COST CALCULATOR</p>
            <div className="flex items-center space-x-2">
              <p className="flex-1">How many kilometers <br />Do you travel per month?</p>
              <input 
                type="text" 
                value={kmValue}
                readOnly
                className="border rounded-xl bg-slate-300 px-2 py-1 w-20 md:w-28"
              />
            </div>
            <input 
              type="range" 
              className="w-full" 
              value={kmValue} 
              min="10" 
              max="5000" 
              onChange={handleKmChange} 
            />
          </div>

          {/* Hours Section */}
          <div className="p-2 flex-grow flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <p className="flex-1">How many hours <br />do you use the car per month?</p>
              <input 
                type="text" 
                value={hourValue}
                readOnly
                className="border rounded-xl bg-slate-300 px-2 py-1 w-20 md:w-28"
              />
            </div>
            <input 
              type="range" 
              className="w-full" 
              value={hourValue} 
              min="1" 
              max="1000" 
              onChange={handleHourChange} 
            />
          </div>
        </div>

        {/* Right Side - Information */}
        <div className="w-full md:w-1/2 px-2 bg-green-50">
          <div className="flex flex-col md:flex-row divide-x divide-gray-300 mb-2 mt-5">
            <div className="w-full md:w-1/2 p-2 flex flex-col items-start space-y-5">
              <p className="font-bold">CAGO COSTS:</p>
              <img src="images/220.png" alt="Dummy Image" className="w-16 h-8" />
              <p>It is recommended to use Cago <span className="text-green-800">PLUS</span> subscription to save more.</p>
            </div>

            <div className="w-full md:w-1/2 p-2 flex flex-col items-start space-y-5">
              <p className="font-bold">PERSONAL CAR COSTS:</p>
              <img src="images/400.png" alt="Dummy Image" className="w-16 h-8" />
              <p>Calculated based on ownership and use of a 2020 VW Polo</p>
            </div>
          </div>

          <div className="bg-green-200 border border-gray-300 p-1 rounded-md flex flex-col md:flex-row mb-5 gap-4">
            <p className='pl-2'>
              Driving Cago <span className="underline">luxurious car</span>, <br /> you will save <span className="text-green-500 font-bold">per month:</span>
            </p>
            <img src="images/Frame.png" alt="Dummy Image" className="w-34 h-12" />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id='the-benefits' className="bg-gray-100 rounded-md mt-5 py-5">
        <p className='pl-7 font-semibold'>We take care of everything, you don’t have to worry about:</p>
        <div className="rounded-md p-5 mt-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 p-3 flex items-center rounded-3xl">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Charging or refuelling</p>
            </div>

            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Insurance</p>
            </div>

            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>APK inspection</p>
            </div>
            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Maintenance</p>
            </div>

            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Roadtask</p>
            </div>

            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Increasing parking fee</p>
            </div>

            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Road assistance</p>
            </div>
            <div className="bg-gray-300 rounded-3xl p-3 flex items-center">
              <img src="images/Checkbox.png" alt="Dummy 5" className="mr-3" />
              <p>Car depreciation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carspage;

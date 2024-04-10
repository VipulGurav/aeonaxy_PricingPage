import React from 'react';

const DemoComponent = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-violet-200 h-130">
      <div className="max-w-3xl w-full p-8">
        <h1 className="text-5xl font-bold text-stone-700 mb-4 text-center">Wix Premium Plans</h1>
        <p className="text-base text-gray-700 text-center text-stone-900 text-xl">Wix gives you 100s of templates, unlimited pages and top grade hosting FREE. Upgrade to Premium and get even more.</p>
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-purple-400 hover:bg-purple-700 text-white font-normal py-2 px-6 rounded-[50px] mt-4">Get Started Today</button>
      </div>
      <div class="flex flex-row mt-9   ">
        <div class="bg-white text-purple-500 p-6 rounded-t-xl" >
          <p class="text-center font-[25px] text-xl ">Website Plans </p> 
          <p>Great for showcasing the professional sites </p>

        </div>
        <div class="bg-violet-300 text-black-800 p-6 rounded-t-xl" >
          <p class="text-center font-[20px] text-xl ">Business and eCommerce Plans </p>
          <p> Essential for accepting online payments</p>

        </div>
      </div>
    </div>




  );
}

export default DemoComponent;

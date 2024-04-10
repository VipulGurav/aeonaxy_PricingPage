import React from 'react';

const Information = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-[1px] mx-auto  m-t-[5px] flex flex-wrap ">
        <div className="lg:w-[90%] mx-auto"> {/* Adjusted width here */}
          <div className="flex flex-wrap w-full bg-violet-100 py-10 px-10 relative mb-4">
            <div className="text-left relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Business & eCommerce plans</h2>
              <p className="leading-relaxed">Grow and manage your online business with a custom storefront, catalog and order management,<br /> shipping and texas, integrated sales channels and more</p>
              <a className="mt-3 text-indigo-500 inline-flex items-start">See Business Plans
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <p class="text-xs text-light-100">Display prices are for yearly subscription, paid in full at time of purchase. Prices do not include applicable taxes, which are determined according to your billing address.<br />
            The final price can be seen on the purchase page, before payment is completed.
          </p>
          <div className="flex flex-wrap justify-between w-90 mx-auto">
  <div className="w-30 px-2">
    <div className="flex flex-row w-full bg-white sm:py-10 py-10 sm:px-10 px-6 relative">
      <div className="text-center relative z-10">
        <h2 className="text-sm text-gray-900 font-medium title-font mb-2">ACCEPTED PAYMENT METHODS</h2>
        <img src="/img/payments.png " alt="logo" className="w-auto h-10" />
      </div>
    </div>
  </div>
 
  <div className="w-30 px-2">
  <div className="flex flex-row w-full bg-white sm:py-10 py-10 sm:px-10 px-6 relative">
    <img src="/img/Cashback.png" alt="logo" className="w-auto h-12 mr-4 mt-2" /> 
    <div className="text-center relative z-10">
      <h2 className="text-sm text-gray-900 font-medium title-font mb-2">MONEY BACK GUARANTEE</h2>
      <p className="leading-relaxed text-xs">Try Wix for 24 days and if you're not 100% <br /> satisfied, get your money back</p>
    </div>
  </div>
</div>

  <div className="w-30 px-2">
    <div className="flex flex-row w-full bg-white sm:py-10 py-10 sm:px-10 px-6 relative">
    <img src="/img/Secure.png" alt="logo" className="w-auto h-12 mr-4 mt-2" /> 

      <div className="text-center relative z-10">
        <h2 className="text-sm text-gray-900 font-medium title-font mb-2">SSL SECURE PAYMENT</h2>
        <p className="leading-relaxed text-xs">Your Information is protected by <br/>256-bit SSL encryption</p>
      
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>

  );
}

export default Information;

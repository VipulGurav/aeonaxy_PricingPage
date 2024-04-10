import React from 'react';

const Category = () => {
  return (
    <section class="text-gray-600 body-font">
  <div class="container flex  flex-wrap px-5 py-24 mx-auto items-center bg-gray-100">
    <div class="md:w-1/4 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
    <h1 className="text-2xl font-bold mb-4 ">Frequently Asked Questions</h1>
     <p className="text-gray-600 mb-6">Haven't found what you're looking <br/> for? Try the <p class="text-blue-600 inline">Wix Help Center</p> or <p class="text-blue-600 inline"> <br/>Contact Us</p>.</p>
        
    
    </div>
    <div class="flex flex-col md:w-3/4 md:pl-12 bg-gray-100">
       <div className="mb-6">
         <h2 className="text-sm font-bold mb-2">What is a Premium Plan?</h2>
         <p>Creating your website is free. With a Premium Plan you can connect your own domain, remove Wix ads from your site, and more. Most Premium Plans include a 1 year free domain voucher. For best value, we recommend our Yearly or Multi-Year Plans.</p>
       </div>
       <div className="mb-6 ">
         <h2 className="text-sm font-bold mb-2">Can I try a Wix Premium Plan for free?</h2>
         <p>Yes. Try any Wix Premium Plan and if you decide it's not for you, you can cancel within 14 days and receive a full refund—no questions asked. This applies to the initial upgrade to a Premium Plan.</p>
       </div>
       <div className="mb-6">
         <h2 className="text-sm font-bold mb-2">How do I get my free domain?</h2>
         <p>Most Yearly or Multi-Year Premium Plans come with a 1 year free domain voucher. You can choose your own domain name with suffixes such as .com, .net, .org and more. Once you find the perfect domain for your site, your voucher will be waiting for you at checkout.</p>
       </div>
       <div className="mb-6">
         <h2 className="text-sm font-bold mb-2">Why do I need a custom domain?</h2>
         <p>A custom domain, like myrunningwebsite.com, is a great way to get found online and promote your brand. Replace your free Wix URL (username.wixsite.com/sitename) with a custom domain you purchased from Wix, or one you already own.</p>
       </div>
       <div className="mb-6">
         <h2 className="text-sm font-bold mb-2">How can I get my own personalized email address?</h2>
         <p>Once you have your own domain, you can purchase a Google Workspace plan and get a custom email address using your domain, like info@myrunningwebsite.com. We've partnered with Google to give you 30GB of Drive storage, as well as Google Calendar, Docs, Sheets and Slides.</p>
       </div>
       <div className="mb-6">
         <h2 className="text-sm font-bold mb-2">Where can I find my billing information?</h2>
         <p>Sign into your Wix account and choose Billing & Payments from the main menu at the top-right of the page. You'll see all your subscriptions and billing history right there.</p>
       </div>
       <div>
         <h2 className="text-sm font-bold mb-2">What online payments are accepted?</h2>
         <p>Wix accepts all major credit cards and debit cards, including Visa, Mastercard, American Express, Discover, JCB and Diners. Additional payment options may be available in your specific location.</p>
       </div>
     </div>
  </div>
</section>
  );
}

export default Category;

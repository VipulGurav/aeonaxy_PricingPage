import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
      <div className="flex justify-center mb-0"> 
    <button className="inline-flex items-center text-purple-700 border-2 border-gray-100 font-normal py-2 px-1 rounded-[5px] text-xs drop-shadow-sm">MOST POPULAR</button>
  </div>

        <div className="lg:w-3/4 w-full mx-auto overflow-auto ">
          <table className="table-auto w-full text-center whitespace-no-wrap border-2  border-gray-200 ">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  rounded-tl rounded-bl border-l-2 border-r-2 "></th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm border border-l-2 border-r-2">VIP <br /><p className="text-sm text-gray-400">First Priority Support</p> </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 border border-l-2 border-r-2">Unlimited <br /><p className="text-sm text-gray-400">Enterprenuers & <br />Freelancers</p></th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  border-l-2 border-r-2 ">Combo <br /> <p className="text-sm text-gray-400">For Personal Use</p></th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  border-l-2 border-r-2 ">Connect Domain <br /><p className="text-sm text-gray-400">Most Basic</p></th>

              </tr>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm  rounded-tl rounded-bl border-gray-300 border-l-2 border-r-2"></th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm border-l-2 border-r-2 text-[40px] relative">
                  <span className="flex items-center justify-between">
                    <span >500</span>
                    <p className="inline text-sm absolute top-0 right-0 left-10 ">py6.<br />/month</p>
                  </span>
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm border-l-2 border-r-2 text-[40px] relative bg-gray-100">
                  <span className="flex items-center justify-between">
                    <span >250</span>
                    <p className="inline text-sm absolute top-0 right-0 left-10 ">py6.<br />/month</p>
                  </span>
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm border-l-2 border-r-2 text-[40px] relative">
                  <span className="flex items-center justify-between">
                    <span >150</span>
                    <p className="inline text-sm absolute top-0 right-0 left-10 ">py6.<br />/month</p>
                  </span>
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm border-l-2 border-r-2 text-[40px] relative">
                  <span className="flex items-center justify-between">
                    <span >90</span>
                    <p className="inline text-sm absolute top-0 right-0 left-5 ">py6.<br />/month</p>
                  </span>
                </th>


              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-2 border-gray-200">Custom domain</td>
                <td className="px-4 py-3 border-2 border-gray-200"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="px-4 py-3 border-2  border-gray-200 bg-gray-100"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 "><FontAwesomeIcon icon={faCheck} /></td>
                <td className="px-4 py-3 text-lg text-gray-500 border-2 border-gray-200"><FontAwesomeIcon icon={faCheck} /></td>

              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Free domain for 1 year</td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 text-lg text-gray-900">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Bandwith</td>
                <td className="border=2 border-gray-200 px-4 py-3">Unlimited</td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">Unlimited</td>
                <td className="border-2 border-gray-200 px-4 py-3">2 GB</td>
                <td className="border-2 border-gray-200 px-4 py-3">1 GB</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Storage space</td>
                <td className="border-2 border-gray-200 px-4 py-3">35 GB</td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">10 GB</td>
                <td className="border-2 border-gray-200 px-4 py-3">3 GB</td>
                <td className="border-2 border-gray-200 px-4 py-3">500 Mb</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Video hours</td>
                <td className="border-2 border-gray-200 px-4 py-3">5 hours</td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">1 hour</td>
                <td className="border-2 border-gray-200 px-4 py-3">30 minutes</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Yandex vouchers</td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Site booster app <br />free for 1 year </td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Visitor Analytics app <br />free for 1 year </td>
                <td className="border-2 border-gborder-2"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">professional logo</td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Social media logo files</td>
                <td className="border-2 border-gray-200 px-4 py-3"><FontAwesomeIcon icon={faCheck} /></td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
                <td className="border-2 border-gray-200 px-4 py-3">-</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-200 px-4 py-3">Customer care</td>
                <td className="border-2 border-gray-200 px-4 py-3">Priority Customer care</td>
                <td className="border-2 border-gray-200 px-4 py-3 bg-gray-100">24/7 Customer care</td>
                <td className="border-2 border-gray-200 px-4 py-3">24/7 Customer care</td>
                <td className="border-2 border-gray-200 px-4 py-3">24/7 Customer care</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </section>
  );
}

export default Pricing;

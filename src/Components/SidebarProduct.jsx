/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React from "react";

const SidebarProduct = ({ children }) => {
  return (
    <div className="">
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-4 py-4 overflow-y-auto bg-orange-600">
          <div className="flex items-center justify-center text-5xl text-white p-2">
            Ini StoreKu
          </div>
          <div className="flex items-center justify-center m-auto -mt-5">
            <ul className="flex-col gap-10">
              <li className="absolute flex items-center justify-center inset-x-0 mt-16">
                <button
                  type="button"
                  className="w-[80%] p-3 flex gap-4 text-start justify-start items-center text-sm font-medium text-orange-600 rounded-lg  bg-white"
                >
                  {/* <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H28.69V28.69H0V0Z"
                      fill="purple"
                      fill-opacity="0.01"
                    />
                    <path
                      d="M2.38926 8.36781L1.85466 7.29857C1.44967 7.50108 1.19385 7.91505 1.19385 8.36781H2.38926ZM14.3434 2.39073L14.878 1.32152C14.5415 1.15324 14.1454 1.15324 13.8088 1.32152L14.3434 2.39073ZM26.2976 8.36781H27.493C27.493 7.91505 27.2372 7.50108 26.8322 7.29857L26.2976 8.36781ZM26.2976 20.322L26.8322 21.3912C27.2372 21.1887 27.493 20.7748 27.493 20.322H26.2976ZM14.3434 26.2991L13.8088 27.3683C14.1454 27.5366 14.5415 27.5366 14.878 27.3683L14.3434 26.2991ZM2.38926 20.322H1.19385C1.19385 20.7748 1.44967 21.1887 1.85466 21.3912L2.38926 20.322ZM2.92387 9.43705L14.878 3.45994L13.8088 1.32152L1.85466 7.29857L2.92387 9.43705ZM25.1022 8.36781V20.322H27.493V8.36781H25.1022ZM25.763 19.2527L13.8088 25.2298L14.878 27.3683L26.8322 21.3912L25.763 19.2527ZM14.878 25.2298L2.92387 19.2527L1.85466 21.3912L13.8088 27.3683L14.878 25.2298ZM3.58468 20.322V8.36781H1.19385V20.322H3.58468ZM26.8322 7.29857L14.878 1.32152L13.8088 3.45994L25.763 9.43705L26.8322 7.29857Z"
                      fill="purple"
                    />
                    <path
                      d="M2.3916 8.36816L14.3458 14.3453"
                      stroke="purple"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.345 26.2989V14.3447"
                      stroke="purple"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M25.9962 8.20117L14.042 14.1783"
                      stroke="purple"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.8561 6.44851C21.4466 6.15324 21.6859 5.43517 21.3907 4.84466C21.0954 4.25416 20.3774 4.0148 19.7869 4.31006L20.8561 6.44851ZM7.83272 10.2871C7.24219 10.5824 7.00286 11.3005 7.29807 11.8909C7.59334 12.4815 8.31143 12.7208 8.9019 12.4256L7.83272 10.2871ZM19.7869 4.31006L7.83272 10.2871L8.9019 12.4256L20.8561 6.44851L19.7869 4.31006Z"
                      fill="purple"
                    />
                  </svg> */}
                  Product
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className=" pl-[280px] h-screen p-5">
        <div className="bg-slate-50 p-4 rounded shadow-lg h-full">{children}</div>
      </div>
    </div>
  );
};

export default SidebarProduct;

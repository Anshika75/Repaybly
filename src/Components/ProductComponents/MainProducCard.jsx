import React from "react";

export default function MainProducCard() {
  return (
    <>
      <div className="md:w-[21%] w-[300px] p-4 mx-3  my-7 h-full bg-white shadow rounded">
        <div
          className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
          }}
        >
          <div className="flex justify-between">
            <input type="checkbox" className="opacity-0" />
            <button className="text-white hover:text-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
          <div>
            <span className="uppercase text-xs bg-green p-2 font-Raleway rounded text-white opacity-50 font-medium select-none">
              Available
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center font-Raleway">
          <p className="text-gray-400 font-light text-xs text-center">
            Hammond robotics
          </p>
          <h1 className="text-gray-800 text-center mt-1 font-semibold">
            Item name
          </h1>
          <p className="text-center text-green font-bold mt-5">
            Rs.299 / 3 days
          </p>
          <div className="inline-flex items-center mt-7">
            <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
              2
            </div>
            <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>

          <button className="p-2 font-Raleway bg-green text-white rounded hover:opacity-90 disabled:opacity-50 mt-7 w-full flex items-center justify-center">
            Add to Cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

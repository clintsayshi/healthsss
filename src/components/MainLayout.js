import React, { useEffect, useRef } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import defaultUserPhoto from "../media/default-user.png";

function MainLayout() {
  const series = [
    {
      name: "Heart Rate",
      type: "line",
      color: "red",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "Blood Oxygen Saturation",
      type: "area",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ];

  const optionz = {
    colors: ["red", "blue"],

    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: [
      "Dec 01",
      "Dec 02",
      "Dec 03",
      "Dec 04",
      "Dec 05",
      "Dec 06",
      "Dec 07",
      "Dec 08",
      "Dec 09 ",
      "Dec 10",
      "Dec 11",
    ],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: "Blood Oxygen Saturation (% Sp02)",
        },
      },
      {
        opposite: true,
        title: {
          text: "Heart Rate (bpm)",
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points";
          }
          return y;
        },
      },
    },
  };

  return (
    <>
      <div className="flex h-screen bg-gray-800 overflow-hidden">
        {/*  */}

        <div className="flex flex-col flex-1 w-full overflow-y-auto">
          <main className="">
            <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-green-400">
              <div className="grid grid-cols-12 gap-6">
                <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                  <div className="col-span-12 mt-8">
                    {/* User Photo */}
                    <div className="flex flex-col sm:flex-row gap-5">
                      <div className="w-40 aspect-square">
                        <img
                          className="object-cover rounded-md border"
                          src={defaultUserPhoto}
                        />
                      </div>

                      {/* User details */}
                      <div className="">
                        <h3 className="text-xl">
                          <strong>Patient Name:</strong> Jane Taylor Doe
                        </h3>
                        <p>
                          <strong>Patient ID</strong>: 001
                        </p>
                        <p>
                          <strong>Date of birth</strong>: 19 January 1999
                        </p>
                        <p>
                          <strong>Age</strong>: 23
                        </p>
                        <p>
                          <strong>Gender</strong>: Female
                        </p>
                        <p>
                          <strong>Body Mass Index</strong>: 17.5
                        </p>
                      </div>
                    </div>
                    {/* Alert */}
                    <div className="py-6 flex flex-col gap-5">
                      <div className="w-max px-4 py-2 flex items-center gap-2 border border-blue-600 rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                          />
                        </svg>

                        <p>
                          The patient's BP has dropped and may requires
                          immediate attention{" "}
                          <a
                            href="tel:0840120417"
                            className="px-2 py-1 bg-blue-500 text-white rounded-full"
                          >
                            Contact Patient
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Graphs */}
                  <div className="col-span-12 mt-5">
                    <div className="grid gap-2 grid-cols-1 ">
                      <ReactApexChart
                        options={optionz}
                        series={series}
                        type="line"
                        width="800"
                      />
                    </div>
                  </div>

                  <div class="w-full border grid grid-cols-12 col-span-12 gap-6 mt-5">
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-yellow-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                          <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              98%
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Average Sp02
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-7 h-7 text-pink-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <div class="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="hidden  items-center">30%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              5
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              Hours
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      class="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                      href="#"
                    >
                      <div class="p-5">
                        <div class="flex justify-between">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-7 w-7 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                            />
                          </svg>
                          <div class="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                            <span class="flex items-center">25%</span>
                          </div>
                        </div>
                        <div class="ml-2 w-full flex-1">
                          <div>
                            <div class="mt-3 text-3xl font-bold leading-8">
                              6
                            </div>

                            <div class="mt-1 text-base text-gray-600">
                              No. of pumps
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;

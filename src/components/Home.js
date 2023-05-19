import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { StarFilled } from "@ant-design/icons";
import F1 from "./Fqa";
import Rad from "./Rad";

function Home() {
  return (
    <>
      <div className="container mx-auto">
        <section style={{ backgroundColor: "#143c2d" }} className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
              Get Matched with Local Professionals
            </h1>
            <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-white">
              Answer a few questions and we’ll put you in touch with pros who
              can help
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  type="search"
                  color="white"
                  label="Zip Code"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                />
                <Button
                  size="sm"
                  color="white"
                  className="!absolute right-1 top-1 rounded"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-row container mx-auto ">
        <div className="mx-auto w-auto">
          <F1 />
        </div>

        < div className="mx-auto w-auto sm:w-1/2 mt-4 ">
        
                  <div className="flex flex-row w-full  mb-5">
                    
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full  h-96 md:h-auto md:h-40 md: w-48"
              src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
              alt=""
            />

            <div class="flex flex-col justify-between p-4 leading-normal">
              <div className="flex ">
                <img
                  class="nk mx-2"
                  src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
                  alt=""
                />
                RTS PHOTOGRAPHY
              </div>
              <div className="rating mx-2 my-2 d-flex ">
                5.0 <StarFilled className="my-1" />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled /> <div className="">22 Reviews</div>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
              <button
                style={{ color: "#143c2d" }}
                class="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
              >
                Ⓜ️Send MSG
              </button>
              <p>
                No-45, 7th Cross, 16 B Main, 4th B Block, Koramangala Extension,
              </p>
            </div>
          </a>
                  </div>
                  <div className="flex flex-row w-full  mb-5">
                    
                    <a
                      href="#"
                      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                      <img
                        class="object-cover w-full  h-96 md:h-auto md:h-40 md: w-48"
                        src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
                        alt=""
                      />
          
                      <div class="flex flex-col justify-between p-4 leading-normal">
                        <div className="flex ">
                          <img
                            class="nk mx-2"
                            src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
                            alt=""
                          />
                          RTS PHOTOGRAPHY
                        </div>
                        <div className="rating mx-2 my-2 d-flex ">
                          5.0 <StarFilled className="my-1" />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled />
                          <StarFilled /> <div className="">22 Reviews</div>
                        </div>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology acquisitions of 2021
                          so far, in reverse chronological order.
                        </p>
                      </div>
                      <div>
                        <button
                          style={{ color: "#143c2d" }}
                          class="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                        >
                          Ⓜ️Send MSG
                        </button>
                        <p>
                          No-45, 7th Cross, 16 B Main, 4th B Block, Koramangala Extension,
                        </p>
                      </div>
                    </a>
                            </div>
                            <div className="flex flex-row w-full  mb-5">
                    
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="object-cover w-full  h-96 md:h-auto md:h-40 md: w-48"
              src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
              alt=""
            />

            <div class="flex flex-col justify-between p-4 leading-normal">
              <div className="flex ">
                <img
                  class="nk mx-2"
                  src="https://res.cloudinary.com/dsxyzdqvo/image/upload/v1684392055/designer_esepkm.webp"
                  alt=""
                />
                RTS PHOTOGRAPHY
              </div>
              <div className="rating mx-2 my-2 d-flex ">
                5.0 <StarFilled className="my-1" />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled /> <div className="">22 Reviews</div>
              </div>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
              <button
                style={{ color: "#143c2d" }}
                class="bg-transparent hover:bg-green-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
              >
                Ⓜ️Send MSG
              </button>
              <p>
                No-45, 7th Cross, 16 B Main, 4th B Block, Koramangala Extension,
              </p>
            </div>
          </a>
                  </div>
                  
        </div>
      </div>
    </>
  );
}

export default Home;

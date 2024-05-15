import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Form = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleService = (service) => {
    if (selectedOptions.includes(service)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== service)
      );
    } else {
      setSelectedOptions([...selectedOptions, service]);
    }
  };
  console.log("selectedOptions", selectedOptions);

  return (
    <div className="w-full h-[auto] flex items-center justify-center bg-[#00081F]">
      <div
        className="w-[80%] h-[auto] relative rounded-[18px]"
        style={{
          background:
            "transparent linear-gradient(125deg, #000E32 0%, #000929 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="w-[40%] h-full pt-[100px] pb-[70px] justify-center flex items-center">
          <div className="flex flex-col gap-[50px]">
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image
                  src="contact/icons/mail.svg"
                  width="23"
                  height="17"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Write us</h6>
                <p className="underline text-[#9EB3CF] text-lg font-bwmss01">
                  arjun@fastcode.ai
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image
                  src="contact/icons/phone.svg"
                  width="24"
                  height="24"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Phone no</h6>
                <p className=" text-[#9EB3CF] text-lg font-bwmss01">
                  +91 85530 38132
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <div
                className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#1A2758]"
                style={{
                  background:
                    " transparent linear-gradient(360deg, #13224F 0%, #13224F 0%, #0C1C46 51%, #020F3B 100%) 0% 0% no-repeat padding-box",
                }}
              >
                <Image
                  src="contact/icons/location.svg"
                  width="22"
                  height="31"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-white text-2xl font-aeonik">Address</h6>
                <p className=" text-[#9EB3CF] text-lg font-bwmss01">
                  #78, Ex-Servicemen Layout <br />
                  1st Main Road, 6th Cross, RK <br /> Hegde Nagar
                  <br /> Bengaluru, Karnataka 56007
                </p>
              </div>
            </div>
            <div>
              <iframe
                className="rounded-[20px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9741306453273!2d77.60383063865423!3d12.975161060562723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173fc76647c7%3A0x7d61be6db08b7c76!2sWeWork%20Church%20Street!5e0!3m2!1sen!2sin!4v1715793029835!5m2!1sen!2sin"
                width="327"
                height="222"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link
              href="https://in.linkedin.com/company/fast-code"
              target="_blank"
            >
              <div className="flex gap-[5px]">
                <Image
                  src="contact/icons/linked.svg"
                  width="28"
                  height="28"
                  alt=""
                />
                <p className="text-xl text-white font-aeonik font-thin ">
                  Linkedin
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[60%] h-full absolute top-0 px-[86px] right-0 bg-[#0E1E49] rounded-[20px] flex flex-col  justify-center gap-[40px]">
          <div className="flex items-center gap-[7px]">
            <p className=" w-[5px] h-[5px] rounded-full bg-white"></p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01 ">
              {"Let's"} Kick Off A Dialogue.
            </p>
          </div>
          <div>
            <h1 className="text-white font-aeonik text-[53px] leading-[51px] tracking-normal">
              Get In Touch For Custom-Fit Solutions.
            </h1>
          </div>
          <div>
            <form className="max-w-[34rem] mx-auto">
              <div className="grid md:grid-cols-2 md:gap-6 mb-[10px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mb-[20px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone No.
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="font-aeonik text-base font-medium peer-focus:font-medium absolute  text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
              </div>
              <div>
                <p className="text-white text-base font-aeonik tracking-normal">
                  Services we can help you with
                </p>
                <div className="flex w-full flex-wrap gap-[20px] my-[20px]">
                  <div
                    className={`border rounded-[36px] px-[25px] py-[20px] text-[#9EB3CF] text-base font-aeonik tracking-normal cursor-pointer hover:bg-[#000D2F] transition-all duration-200 ease-in ${
                      selectedOptions.includes("ML Software Solutions")
                        ? "bg-[#000D2F]"
                        : ""
                    }`}
                    onClick={() => handleService("ML Software Solutions")}
                  >
                    ML Software Solutions
                  </div>
                  <div
                    className={`border rounded-[36px] px-[25px] py-[20px] text-[#9EB3CF] text-base font-aeonik tracking-normal cursor-pointer hover:bg-[#000D2F] transition-all duration-200 ease-in ${
                      selectedOptions.includes("Consultation")
                        ? "bg-[#000D2F]"
                        : ""
                    }`}
                    onClick={() => handleService("Consultation")}
                  >
                    Consultation
                  </div>
                  <div
                    className={`border rounded-[36px] px-[25px] py-[20px] text-[#9EB3CF] text-base font-aeonik tracking-normal cursor-pointer hover:bg-[#000D2F] transition-all duration-200 ease-in ${
                      selectedOptions.includes("Niche Staffing")
                        ? "bg-[#000D2F]"
                        : ""
                    }`}
                    onClick={() => handleService("Niche Staffing")}
                  >
                    Niche Staffing
                  </div>
                  <div
                    className={`border rounded-[36px] px-[25px] py-[20px] text-[#9EB3CF] text-base font-aeonik tracking-normal cursor-pointer hover:bg-[#000D2F] transition-all duration-200 ease-in ${
                      selectedOptions.includes("Product Portfolio")
                        ? "bg-[#000D2F]"
                        : ""
                    }`}
                    onClick={() => handleService("Product Portfolio")}
                  >
                    Product Portfolio
                  </div>
                </div>
              </div>
              <div className="flex gap-[80px] items-center mt-[25px]">
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    type="text"
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_message"
                    className="font-aeonik text-base font-medium peer-focus:font-medium absolute  text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Message
                  </label>
                </div>
                <button
                  type="submit"
                  className="text-white h-[63px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                  style={{
                    background:
                      "transparent linear-gradient(174deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  <Image src="/arrowRight.svg" width="32" height="32" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

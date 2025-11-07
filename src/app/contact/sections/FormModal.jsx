"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import mailIcon from "../../../../public/contact/icons/mail.svg";
import phoneIcon from "../../../../public/contact/icons/phone.svg";
import locationIcon from "../../../../public/contact/icons/location.svg";
import linkedinIcon from "../../../../public/contact/icons/linked.svg";

const FormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    service: [],
    message: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const messageRef = useRef();
  const modalRef = useRef();

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const handleService = (service) => {
    setFormData((prevFormData) => {
      const serviceIndex = prevFormData.service.indexOf(service);
      const newServices =
        serviceIndex >= 0
          ? prevFormData.service.filter((s) => s !== service)
          : [...prevFormData.service, service];
      return { ...prevFormData, service: newServices };
    });
  };

  const handleChange = (ref, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: ref.current.value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(false);
    setMessage("Sending email...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("result", result);

      if (response.ok) {
        setIsSubmitted(true);
        setMessage("✓ Email sent successfully!");
        // Reset form
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        companyRef.current.value = "";
        messageRef.current.value = "";
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          service: [],
          message: "",
        });
        setTimeout(() => {
          setMessage("");
          setIsSubmitted(false);
          onClose();
        }, 2000);
      } else {
        setMessage("✗ Error sending email. Please try again.");
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("✗ Error sending email. Please try again.");
      setTimeout(() => {
        setMessage("");
      }, 4000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
      <div
        ref={modalRef}
        className="relative w-full max-w-[95%] lg:max-w-[900px] max-h-[95vh] md:max-h-[90vh] overflow-y-auto rounded-[18px] bg-[#0E1E49] shadow-2xl my-auto"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close modal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Form Content */}
        <div className="py-[30px] md:py-[50px] px-[20px] md:px-[50px] lg:px-[60px]">
          <div className="flex items-center justify-center lg:justify-start gap-[7px] mb-[20px]">
            <p className="w-[5px] h-[5px] rounded-[4px] bg-white"></p>
            <p className="text-[#9EB3CF] text-lg font-bwmss01">
              {"Let's"} Kick Off A Dialogue.
            </p>
          </div>
          <div className="mb-[30px]">
            <h1 className="text-white font-aeonik text-2xl md:text-3xl lg:text-[40px] lg:leading-[48px] tracking-normal text-center lg:text-left">
              Get In Touch For Custom-Fit Solutions.
            </h1>
          </div>
          <div>
            <form className="max-w-[34rem] mx-auto" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 md:gap-6 mb-[10px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={nameRef}
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(nameRef, "name")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={emailRef}
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(emailRef, "email")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6 mb-[10px]">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={phoneRef}
                    type="tel"
                    name="floating_phone"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(phoneRef, "phone")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    ref={companyRef}
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(companyRef, "companyName")}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_company"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <div className="py-2.5 px-0">
                  <label
                    htmlFor="services"
                    className="block mb-2 font-aeonik text-base font-medium text-[#9eb3cf]"
                  >
                    Services
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      "ML Software Solutions",
                      "Consultation",
                      "Niche Staffing",
                      "Product Portfolio",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        className={`border border-white rounded-[4px] px-[20px] py-[15px] text-[#9EB3CF] text-base font-aeonik tracking-normal cursor-pointer hover:bg-[#000D2F] transition-all duration-200 ease-in ${
                          formData.service.includes(service)
                            ? "bg-[#000D2F] text-white"
                            : ""
                        }`}
                        onClick={() => handleService(service)}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:gap-[30px] gap-[10px] xl:gap-[40px] items-start mt-[25px]">
                <div className="relative z-0 w-full mb-5 group">
                  <textarea
                    ref={messageRef}
                    name="floating_message"
                    id="floating_message"
                    className="block py-2.5 px-0 w-full font-aeonik text-base text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-auto dark:text-white dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={() => handleChange(messageRef, "message")}
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="floating_message"
                    className="peer-focus:font-medium absolute font-aeonik text-base font-medium text-[#9eb3cf] dark:text-[#9eb3cf] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:start-0 rtl:peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Message
                  </label>
                </div>

                {message && (
                  <div
                    className={`text-sm font-medium ${
                      isSubmitted ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[4px] py-[10px] px-[25px] text-center font-bwmss01 transition-all duration-300 ${
                    isLoading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-90"
                  }`}
                  style={{
                    background:
                      "transparent linear-gradient(174deg, #2DC1C3 0%, #0268F2 100%) 0% 0% no-repeat padding-box",
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : isSubmitted && message ? (
                    <span>✓ Submitted</span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        /* Webkit browsers (Chrome, Safari, Edge) */
        div::-webkit-scrollbar {
          width: 6px;
        }

        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* Mobile smooth scrolling */
        @media (max-width: 768px) {
          div {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </div>
  );
};

export default FormModal;


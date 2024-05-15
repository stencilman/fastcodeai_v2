import Image from "next/image";
import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[#00081F]">
      <div
        className="w-[80%] h-[auto] relative rounded-[18px]"
        style={{
          background:
            "transparent linear-gradient(125deg, #000E32 0%, #000929 100%) 0% 0% no-repeat padding-box",
        }}
      >
        <div className="w-[40%] h-full pt-[100px] pb-[70px] pl-[60px] flex items-center">
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
            <div >
              <iframe
              className="rounded-[20px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9741306453273!2d77.60383063865423!3d12.975161060562723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae173fc76647c7%3A0x7d61be6db08b7c76!2sWeWork%20Church%20Street!5e0!3m2!1sen!2sin!4v1715793029835!5m2!1sen!2sin"
                width="327"
                height="222"
                style={{border:"0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <Link href="https://in.linkedin.com/company/fast-code" target="_blank">
            <div className="flex gap-[5px]">
              <Image
                src="contact/icons/linked.svg"
                width="28"
                height="28"
                alt=""
              />
              <p className="text-xl text-white font-aeonik font-thin ">Linkedin</p>
            </div>
            </Link>
          </div>
        </div>
        <div className="w-[60%] h-full absolute top-0 right-0 bg-[#0E1E49] rounded-[20px]">
            
        </div>
      </div>
    </div>
  );
};

export default Form;

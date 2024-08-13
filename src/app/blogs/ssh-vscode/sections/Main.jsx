"use client";
import React, { useEffect, useRef, useState } from "react";
import SocialShare from "../../components/SocialShare";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/component/Button";
import { recommendBlogsDataList } from "@/app/utils/recommendBlogsDataList";
import RecommendBlogSection from "../../sections/RecommendBlogSection";

const Main = () => {
  const {
    2: recommendBlog1,
    9: recommendBlog2,
    8: recommendBlog3,
  } = recommendBlogsDataList;

  const [topicHighlight, setTopicHighlight] = useState("topic1");
  const topicRefs = useRef([null, null, null]);

  const scrollToTopic = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150; // Adjust this value as needed
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + window.innerHeight / 2;
      console.log("topicRefs", topicRefs.current);
      topicRefs.current.forEach((ref, index) => {
        if (
          ref?.offsetTop <= offset &&
          ref.offsetTop + ref.offsetHeight > offset
        ) {
          console.log("topicName", ref.id);
          setTopicHighlight(ref.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially to set the active topic

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full h-auto pt-[100px] pb-[50px] px-[35px] md:px-[45px] lg:px-[80px] flex justify-center flex-col ">
      <div>
        <div className="flex flex-col-reverse md:flex-row gap-[50px] justify-center">
          <div className="flex flex-col md:flex-row gap-[50px] ">
            <SocialShare />
            {/* Main */}
            <div className="md:w-[621%] md:max-w-[822px] flex flex-col gap-[30px] ">
              {/* content */}

              {/* topic-1 */}
              <div
                id="topic1"
                ref={(el) => (topicRefs.current[0] = el)}
                className="flex flex-col gap-[20px]"
              >
                {/* <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  What is Lid Driven Cavity (LDC)?
                </h4> */}

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  As developers, we often work on remove servers via VSCode,
                  which can be challenging if there are multiple hops. The
                  challenge I faced involved connecting to a remote server via
                  an intermediary AWS EC2 instance. Not only I was not able to
                  add breakpoints and debug my code, it also required multiple
                  passwords.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  This article details an approach to establish an efficient
                  connection for this <b>jump connection</b> inside VSCode. This
                  guide is intended for developers, sys admins, and anyone
                  looking to enhance their workflow in managing remote servers
                  through VSCode.
                </p>
              </div>

              {/* topic-2 */}
              <div
                id="topic2"
                ref={(el) => (topicRefs.current[1] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Initial Setup and Problem Identification
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  My original setup involved a two-step connection process.
                  Initially, I connected to an EC2 instance using a {".pem"}{" "}
                  file. A {".pem"} file is a type of file that contains
                  encryption keys or certificates used for secure
                  communications.
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                    {`ssh -i "path/to/.pem file"`}
                    <br />
                    {"EC2_username@EC2_IP_address"}
                  </p>
                </div>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  I then accessed the final server by specifying the port (port
                  9000 in my case) with:
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                    {"ssh -p 9000 localhost_username@localhost"}
                  </p>
                </div>

                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  This method necessitated entering a password multiple times,
                  proving cumbersome and time-consuming.
                </p>
              </div>
              {/* end topic-2 */}

              {/* topic-3 */}
              <div
                id="topic3"
                ref={(el) => (topicRefs.current[2] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Simplifying the Connection Process
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Direct Access via Modified SSH Command:</b> To enhance
                  efficiency, I modified the SSH command to bypass the
                  intermediary connection, allowing direct access to the remote
                  {"server’s"} password prompt from Windows PowerShell:
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl mt-[15px] break-words">
                    {`ssh -i “path/to/.pem file” -p 9000`}
                    <br />
                    {"localhost_username@EC2_IP_address"}
                  </p>
                </div>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  <b>Integrating with VSCode:</b> Utilizing this command within
                  the VSCode Remote-SSH extension, accessed via the{" "}
                  {"Connect to Host"} option, presented the password prompt
                  directly. However, frequent password entries for each new
                  VSCode folder proved inefficient.
                </p>
              </div>
              {/* end topic-3 */}

              {/* topic-4 */}
              <div
                id="topic4"
                ref={(el) => (topicRefs.current[3] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Establishing Password-less Access
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  To resolve the issue of repeated password entries, I set up
                  password-less access by utilizing SSH keys. The commands in
                  this subsection were ran in Windows Powershell. The process
                  involved:
                </p>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      Generating a secure key pair using {"ssh-keygen"} command:
                    </li>
                  </ul>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {`ssh-keygen`}
                  </p>
                </div>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      Transferring the public key to the remote server using{" "}
                      {"scp"} (Secure Copy Protocol), a means to transfer files
                      between a local machine and a remote server:
                    </li>
                  </ul>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {`scp -P 9000 “path/to/.pub file”`}
                    <br />
                    {`localhost_username@EC2_IP_address:~/`}
                  </p>
                </div>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      After logging into the remote server, I appended the
                      public key to {"authorized_keys"} file to authenticate
                      without a password, and then removed the public key file
                      as it is no longer required after being appended:
                    </li>
                  </ul>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {`cat ~/filename.pub >> ~/.ssh/authorized_keys`}
                    <br />
                    {`rm ~/filename.pub`}
                  </p>
                </div>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      Permissions were set to secure the authentication process:
                    </li>
                  </ul>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {`chmod 600 ~/.ssh/authorized_keys  # Read/write by the owner only`}
                    <br />
                    {`chmod 700 ~/.ssh  # Owner can read, write, and execute`}
                  </p>
                </div>
              </div>
              {/* end topic-4 */}

              {/* topic-5 */}
              <div
                id="topic5"
                ref={(el) => (topicRefs.current[4] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Connecting Through VSCode
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  With the setup complete on the remote server, connecting
                  through VSCode becomes straightforward:
                </p>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      <b>Open Remote Explorer:</b> Navigate and click {"+"} to
                      add a new SSH host.
                    </li>
                  </ul>
                </div>
                <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    className="w-full h-full"
                    src="/blogs/multi-hop/content/vs-code1.png"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  Visual Studio Code Window with Remote Explorer Tab Open
                </p>

                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      <b>Enter SSH Command in the prompt and press ENTER:</b>
                    </li>
                  </ul>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <p className="bg-[#293138] text-white p-[12px] rounded-2xl  break-words">
                    {`ssh -i “path/to/private key” -p 9000 `}
                    <br />
                    {`localhost_username@EC2_IP_address`}
                  </p>
                </div>
                <div className="text-[#9EB3CF] text-lg font-bwmss01">
                  <ul className="mb-0">
                    <li className="list-disc">
                      This command adds the host to {`VSCode’s`} remote explorer
                      and updates the {".ssh/config"} file, streamlining future
                      connections.
                    </li>
                    <li className="list-disc">
                      Initiate Connection: Through the Command Palette
                      (Ctrl+Shift+P), again choose{" "}
                      {"Remote-SSH: Connect to Host"} and select the configured
                      host.
                    </li>
                    <li className="list-disc">
                      The bottom left corner of the VSCode window will show the
                      status of the connection. If it is connected it will show{" "}
                      {`"SSH: {Host name}"`}.
                    </li>
                  </ul>
                </div>
                <div className=" bg-black rounded-[20px] shadow-[0px_3px_6px_#00000029]">
                  <Image
                    className="w-full h-full"
                    src="/blogs/multi-hop/content/vs-code2.png"
                    width="744"
                    height="355"
                    alt=""
                  />
                </div>
                <p className="text-[#9eb3cfcb] text-center text-base font-bwmss01">
                  Here the host name is an IP address. Now you can open files on
                  the remote server.
                </p>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  Ensure good internet connection for both your local machine
                  and the remote server as well as the intermediate server to
                  ensure consistent connection.
                </p>
              </div>
              {/* end topic-5 */}

              {/* topic-6 */}
              <div
                id="topic6"
                ref={(el) => (topicRefs.current[5] = el)}
                className="flex flex-col gap-[20px]"
              >
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Conclusion
                </h4>
                <p className="text-[#9EB3CF] text-lg font-bwmss01">
                  This refined approach not only saved time but also enhanced
                  the security of my remote server management operations through
                  VSCode by leveraging SSH keys. By documenting this process, I
                  hope to help others optimize their remote server workflows in
                  VSCode, making them more efficient and secure. Please share
                  any feedback or additional strategies {"you've"} found
                  effective in your professional environment!
                </p>
              </div>

              {/* CTA */}
              <div className="w-full py-[26px] px-[20px] md:px-[50px] lg:px-[100px] flex flex-col gap-[18px] bg-[#000D2F] rounded-[20px] my-[60px]">
                <h4 className="text-white text-2xl font-aeonik tracking-wide">
                  Want to know more about AI ML Technology
                </h4>
                <p className="text-white text-lg font-aeonik ">
                  Incorporate AI ML into your workflows to boost efficiency,
                  accuracy, and productivity. Discover our artificial
                  intelligence services.
                </p>
                <div className="w-[164px]">
                  <Button to="/contact" name="Know More" />
                </div>
              </div>
            </div>
          </div>
          {/* nav */}
          <div className="relative md:sticky md:top-[120px] h-[280px] sm:h-[300px] md:h-fit ">
            <Image
              className="min-h-[250px] min-w-[267px] md:min-w-[36vw] lg:min-w-[366px] relative"
              src="/blogs/rec.svg"
              width="400"
              height="500"
              alt=""
            />
            <div className="absolute top-0 ">
              <h6 className="text-white text-lg font-aeonik px-[23px] pt-[23px]">
                TABLE OF CONTENTS
              </h6>
              <div className="mt-[15px] max-w-[400px] text-lg font-bwmss01 h-[46vw] sm:h-[210px] md:h-[19vw] lg:h-[218px] overflow-auto">
                <a
                  onClick={() => {
                    scrollToTopic("topic1");
                    setTopicHighlight("topic1");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] ml-[2px] mb-[4px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9]  ${
                      topicHighlight === "topic1"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    }  `}
                  >
                    1. About
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic2");
                    setTopicHighlight("topic2");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer  transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic2"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    2. Setup and Problem Identification
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic3");
                    setTopicHighlight("topic3");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic3"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    3. Connection Process
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic4");
                    setTopicHighlight("topic4");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic4"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    4. Establishing Password-less Access
                  </p>
                </a>

                <a
                  onClick={() => {
                    scrollToTopic("topic5");
                    setTopicHighlight("topic5");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic5"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    5. Connecting Through VSCode
                  </p>
                </a>
                <a
                  onClick={() => {
                    scrollToTopic("topic6");
                    setTopicHighlight("topic6");
                  }}
                >
                  <p
                    className={`pl-[20px] pb-[4px] pr-[15px] cursor-pointer transition-all duration-300 ease-in-out lg:hover:text-[#3784e9] ml-[2px] mb-[4px] ${
                      topicHighlight === "topic6"
                        ? "border-l-[#036BF0] text-[#036BF0] border-l-[3px]"
                        : "text-[#9EB3CF]"
                    } `}
                  >
                    6. Conclusion
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Read More */}
      <div>
        <div className="w-full flex justify-between items-center my-[50px]">
          <h4 className="text-white text-[7vw] md:text-[42px] font-aeonik tracking-wide">
            Read More Blogs
          </h4>
          <Link href="/blogs">
            <div className="group flex gap-[5px] ">
              <p className="text-white text-base font-aeonik ">View All</p>
              <Image
                className="relative group-hover:translate-x-2 transition-all duration-500 ease-in"
                src="/arrowRight.svg"
                width="17"
                height="17"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="w-full relative flex flex-col md:flex-row gap-[56px] md:gap-[5%] mt-[90px] md:mt-[220px] ">
          <RecommendBlogSection
            recommendBlog1={recommendBlog1}
            recommendBlog2={recommendBlog2}
            recommendBlog3={recommendBlog3}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

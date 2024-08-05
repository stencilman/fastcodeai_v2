"use client"
import { useEffect, useState } from "react";

import Link from "next/link";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Footer from "@/app/component/sections/Footer";



const PrivacyPolicyWeave = () => {

    const { setIsActive } = useGlobalContext()


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false)
    }, [])
    return (
        <>
            <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative pt-[130px] md:pt-[200px] py-[100px] bg-[#00081F] ">
                <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Privacy Policy for Weave
                </h1>
                <div className="flex flex-col gap-[20px] mt-[50px]">
                    <div className="flex gap-[5px]">
                        <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                            <b className={`text-white font-bold  text-xl `}>Effective Date: February 6, 2024</b> <br />Thank you for choosing Weave. Weave values the trust of its users and is committed to protecting their privacy. This Privacy Policy outlines how Weave {`("we", "our", or "us")`} collects, uses, stores, and shares information when users {`("you" or "your")`} use our mobile application {`("App")`}. By using Weave, users consent to the practices described in this Privacy Policy.
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>Information We Collect:</b> <br />
                                Audio Recordings: Weave records and processes audio recordings of {"users'"} vocal entries. These recordings are stored locally on their devices and, if users choose, can be uploaded to their Google Drive accounts. User-Provided Information: We may collect information that users provide voluntarily, such as feedback, preferences, or other information they choose to share with us. Usage Data: We may collect information about {"users'"} usage of the App, including interactions with features, performance data, and crash logs.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>How We Use Your Information:</b> <br />
                                Audio Processing: We use the audio recordings to analyze and process {"users'"} vocal entries, providing insights or personalized recommendations based on the content. Improving Our Services: We use the information collected to improve the functionality and user experience of Weave. Customer Support: We may use {"users'"} information to respond to inquiries, provide technical support, or address user feedback.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>Data Storage:</b> <br />
                                Local Storage: Audio recordings are stored locally on {"users'"} devices to enable offline access and processing. Google Drive: With {"users'"} consent, we may upload audio recordings to their Google Drive accounts. Recordings stored on Google Drive are subject to {"Google's"} Privacy Policy.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>Third-Party Services:</b> <br />
                                APIs: We may use third-party APIs to assist in processing audio recordings. These third-party services are governed by their respective privacy policies. Google Drive: If users choose to store their recordings on Google Drive, their data will be subject to {"Google's"} terms and policies.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>Data Security:
                                </b> <br />
                                Weave takes appropriate measures to safeguard {"users'"} information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security of {"users'"} data.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}>Your Choices:
                                </b> <br />
                                Google Drive Integration: Users have the option to opt out of backing up their data with Google Drive by disabling the feature in the App settings. Data Deletion: Users can delete audio recordings stored on their devices at any time. If they choose to store recordings on Google Drive, they can manage and delete them through their Google accounts.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white  font-bold text-xl`}> {"Children's"} Privacy:
                                </b> <br />

                                Weave does not knowingly collect personally identifiable information from children under the age of 13. If users believe that we may have collected information from a child under 13, they should contact us immediately.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white  font-bold text-xl`}> Changes to this Privacy Policy:
                                </b> <br />

                                We reserve the right to update or modify this Privacy Policy at any time. We will notify users of any changes by posting the new Privacy Policy on this page.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-[5px]">
                            <p className="text-[#9EB3CF]  text-sm md:text-lg  font-bwmss01 mt-[10px]">
                                <b className={`text-white font-bold  text-xl`}> Contact Us:
                                </b> <br />


                                If you have any questions or concerns about this Privacy Policy or our practices, please contact us at arjun@fastcode.ai. By using Weave, users agree to the terms and conditions outlined in this Privacy Policy. Users should review this Privacy Policy periodically for any updates or changes.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <Footer showExtraSpace={true} />

        </>
    )
}

export default PrivacyPolicyWeave

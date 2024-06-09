"use client"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Footer from "../component/sections/Footer";
import Link from "next/link";



const TermConditions = () => {
    const { setIsActive } = useGlobalContext();


    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false)
    }, [])
    return (
        <>
            <div className="w-full h-[auto] pl-[20px] md:pl-[50px] lg:pl-[100px] pr-[20px] md:pr-[50px] lg:pr-[100px] relative pt-[130px] md:pt-[200px] py-[100px] bg-[#00081F] ">
                <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Terms and Conditions
                </h1>
                <div className="flex flex-col gap-[50px] mt-[50px]">
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            1.

                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
                            Welcome to FastCode.ai. By accessing our website and using our services,
                            you agree to be bound by the following terms and conditions. If you do not agree with any
                            part of these terms, you must not use our website or services.AS
                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            2.

                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
                            Intellectual Property Rights The content, layout, design, data, databases and graphics on
                            this website are protected by Indian and international intellectual property laws and are
                            owned by FastCode AI Consult Pvt. Ltd. or its licensors. Unless expressly permitted, you
                            must not reproduce, modify, copy, distribute, or use for commercial purposes any content
                            without the written permission of FastCode AI Consult Pvt. Ltd.
                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            3.

                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
                            Use of the Service FastCode AI Consult Pvt. Ltd. grants you a non-exclusive, non-
                            transferable, limited license to access and use the services strictly in accordance with these
                            terms. This license is solely for your personal and non-commercial use, unless otherwise
                            agreed upon through a written agreement with FastCode AI Consult Pvt. Ltd.
                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            4.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
                            User Obligations You agree to use FastCode.ai only for lawful purposes and in a way that
                            does not infringe the rights of, restrict, or inhibit anyone {"else's"} use and enjoyment of the
                            website. Prohibited behaviour includes harassing or causing distress or inconvenience to any
                            other user, transmitting obscene or offensive content, or disrupting the normal flow of
                            dialogue within our website.

                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            5.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">

                            Privacy Policy Our Privacy Policy, which sets out how we will use your information, can
                            be found at <Link href="/privacy-policy" className="text-blue-600">[Privacy Policy link]</Link> . By using this website, you consent to the processing
                            described therein and warrant that all data provided by you is accurate.

                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            6.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">

                            Termination FastCode AI Consult Pvt. Ltd. may terminate or suspend access to our
                            services immediately, without prior notice or liability, for any reason whatsoever, including,
                            without limitation, if you breach the Terms and Conditions.
                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            7.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">
                            Warranty Disclaimer Our services and all content on FastCode.ai are provided on an as
                            is and as available basis. FastCode AI Consult Pvt. Ltd. makes no representations or
                            warranties of any kind, express or implied, as to the operation of their services, or the
                            information, content, or materials included therein.

                        </p>
                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            8.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">


                            Limitation of Liability In no event shall FastCode AI Consult Pvt. Ltd., nor its directors,
                            employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental,
                            special, consequential or punitive damages, including without limitation, loss of profits, data,
                            use, goodwill, or other intangible losses, resulting from your access to or use of or inability to
                            access or use the services.

                        </p>

                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            9.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">


                            Governing Law These terms shall be governed by and construed in accordance with the
                            laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts
                            located in Bangalore, India, for the resolution of any disputes.

                        </p>

                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            10.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">


                            Changes to Terms FastCode AI Consult Pvt. Ltd. reserves the right to amend these terms
                            at any time. Any changes will be posted on this page, and your continued use of our website
                            or services following any changes indicates your acceptance of the new terms..

                        </p>

                    </div>
                    <div className="flex gap-[5px]">
                        <p className="text-white font-normal font-aeonik text-3xl tracking-wide ">
                            12.
                        </p>
                        <p className="text-[#9EB3CF]  text-sm md:text-lg font-bwmss01 mt-[10px]">


                            Contact Us If you have any questions about these Terms and Conditions, please contact
                            us at arjun@fastcode.ai

                        </p>

                    </div>

                </div>
            </div>
            <Footer showExtraSpace={true}/>
        </>
    )
}

export default TermConditions

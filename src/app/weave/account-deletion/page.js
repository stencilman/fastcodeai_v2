"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGlobalContext } from "@/app/context/GlobalContext";
import Footer from "@/app/component/sections/Footer";

const AccountDeletion = () => {
    const { setIsActive } = useGlobalContext();
    const [emailId, setEmailId] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef(null);

    const validateEmailID = (emailId) => {
        var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(emailId);
    };

    const submitEmail = async () => {
        setIsLoading(true);
        if (emailId.length > 0) {
            if (validateEmailID(emailId)) {
                try {
                    let data = await fetch('https://weavemock-production-a808.up.railway.app/account/deletion', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ deletion_email: emailId })
                    });

                    let res = await data.json();
                    setMessage(res.message);
                    setIsLoading(false);
                    setEmailId("");
                    setTimeout(() => setMessage(""), 5000);
                } catch (error) {
                    setMessage("Oops! Couldn't process your request. Please try again later.");
                    setIsLoading(false);
                    setTimeout(() => setMessage(""), 5000);
                    console.error(error);
                }
            } else {
                setMessage("Invalid Email Address");
                setIsLoading(false);
                setTimeout(() => setMessage(""), 5000);
            }
        } else {
            setMessage("Please, Enter the Email Address");
            setIsLoading(false);
            setTimeout(() => setMessage(""), 5000);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsActive(false);
    }, []);

    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                submitEmail();
            }
        };

        const emailElement = emailRef.current;
        emailElement.addEventListener('keyup', handleKeyUp);

        return () => {
            emailElement.removeEventListener('keyup', handleKeyUp);
        };
    }, [emailId]);

    return (
        <>
            <div className="w-full h-auto pl-5 md:pl-12 lg:pl-24 pr-5 md:pr-12 lg:pr-24 relative pt-32 md:pt-48 py-24 bg-[#00081F]">
                <h1 className="text-[8vw] md:text-[7vw] tracking-normal lg:text-[51px] text-white font-aeonik">
                    Account Deletion
                </h1>

                <div className="mt-[30px] contactForm">
                    <div className="form-group">
                    <label id="label" htmlFor="email" className="form-label text-white">Email</label>
                        <input
                            className="form-control p-[10px] rounded-md w-[70%] md:w-[350px]"
                            name="email"
                            id="email"
                            required
                            value={emailId}
                            onChange={(e) => setEmailId(e.target.value)}
                            ref={emailRef}
                        />
                    </div>

                    
                <p id="messageBox" className="pl-3 mb-[10px] text-white">{message}</p>

                    <button
                        type="button"
                        onClick={submitEmail}
                        name="submit"
                        id="send"
                        className="main_cta_button rounded-[28px] relative z-[1] flex items-center gap-[7px] bg-gradient-to-br from-[#2DC1C3] to-[#0268F2] text-white py-[15px] px-[30px] text-lg justify-between"
                    >
                        {isLoading && <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>}
                        Send
                    </button>
                </div>
            </div>

            <Footer showExtraSpace={true} />
        </>
    );
};

export default AccountDeletion;

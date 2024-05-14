import React from "react";

const Members = () => {
    const memebersList = [
        {name: "DR. ARJUN JAIN",role: "CEO & Chief Scientist",position:"top-[0px]",bg:"bg-arjun"},
        {name: "ABDUL MUQTADIR",role: "Software Engineer",position:"top-[-150px] left-[600px]",bg:"bg-abdul"},
        {name: "PARTH BASOLE",role: "Generalist Engineer",position:"top-[50px] left-[0px]",bg:"bg-parth"},
        {name: "Easwar",role: "IOS Developer",position:"top-[-400px] left-[450px]",bg:"bg-eshwar"},
        {name: "SANJAY SURIYAKUMAR",role: "Research Scientist",position:"top-[-800px] left-[890px]",bg:"bg-sanjay"},
        {name: "GAUTAM ADITHYA RAVI",role: "Head of Engineering",position:"top-[-800px] left-[90px]",bg:"bg-gautham"}
    ]
  return (
    <div className="w-full  px-[100px] py-[250px]  bg-[#00081F]">
      {memebersList.map((e,i)=><div key={i} className={`w-[400px] h-[598px] rounded-[20px] ${e?.bg} relative ${e?.position} bg-no-repeat bg-cover px-[16px] py-[32px] flex items-end`}>
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-white text-[51px] leading-[52px] font-aeonik font-light tracking-wide">
           {e.name}
          </h1>
          <p className="text-[#9EB3CF] font-aeonik text-2xl font-light">
           {e.role}
          </p>
        </div>
      </div>)}
    </div>
  );
};

export default Members;

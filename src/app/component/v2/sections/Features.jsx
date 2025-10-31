import React from "react";

const features = [
  {
    title: "Data Platform",
    description: "Deploy & manage AI systems in weeks, not years.",
  },
  {
    title: "Research & Deployment",
    description:
      "Frontier research on systems optimization, self-construction, and integration.",
  },
  {
    title: "Seamless Integration",
    description:
      "Connects directly to your workflows, data, and enterprise systems.",
  },
  {
    title: "Outcome-Driven Partnership",
    description:
      "Forward deploying the best researchers against your unique problems.",
  },
];

const Features = () => {
  return (
    <main className="bg-[#00081F] min-h-screen w-full flex flex-col items-center justify-center text-[#9EB3CF] p-4 sm:p-8">
      <div className="text-center max-w-7xl mx-auto py-16">
        <p className="text-lg font-normal mb-6 text-[#9EB3CF]">
          Most AI initiatives stall in endless pilots.
        </p>
        {/* <h1 className="text-2xl md:text-3xl font-light max-w-4xl mx-auto mb-16 text-[#9EB3CF] leading-normal">
          Fast Code delivers AI that works—integrating seamlessly into
          enterprise operations to drive{" "}
          <span className="text-white font-normal">$100M+ impact.</span>
        </h1> */}
        <h1 className="text-xl mx-auto mb-16 font-normal text-[#fff] leading-normal tracking-wide">
          Fast Code delivers AI that works—integrating seamlessly into
          enterprise operations to drive $100M+ impact.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <p className="text-lg md:text-xl mt-16 text-white">
          We {"don't"} prototype—we deploy real, scalable solutions.
        </p>
      </div>
    </main>
  );
};

export default Features;

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-[#000E29] rounded-2xl h-full flex flex-col text-left border border-[#1D2B4F]  border-color duration-500 hover:border-[#ffffff92] hover:border transition group py-[50px] px-[30px]">
      <h2 className="text-[28px] text-[#9EB3CF] group-hover:text-white font-semibold font-aeonik tracking-wide mb-4">
        {title}
      </h2>
      <p className="text-[#9EB3CF] text-lg leading-relaxed">{description}</p>
    </div>
  );
};

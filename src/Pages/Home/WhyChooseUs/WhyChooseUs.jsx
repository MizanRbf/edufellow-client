import React from "react";
import { GraduationCap, Filter, ShieldCheck, Users } from "lucide-react";
import whyChooseUs from "../../../../public/assets/whyChooseUs.jpg"; // Adjust path if needed

const features = [
  {
    title: "Verified Scholarships",
    description:
      "Only trusted and verified scholarships—no scams, no outdated listings.",
    icon: <ShieldCheck className="w-6 h-6 text-sky-600" />,
    bg: "bg-sky-100",
  },
  {
    title: "Smart Filtering",
    description:
      "Easily find scholarships by country, degree, or subject in seconds.",
    icon: <Filter className="w-6 h-6 text-purple-600" />,
    bg: "bg-purple-100",
  },
  {
    title: "Built for Students",
    description:
      "We’ve walked in your shoes. This platform is tailored for you.",
    icon: <Users className="w-6 h-6 text-rose-600" />,
    bg: "bg-rose-100",
  },
  {
    title: "AI-Powered Matching",
    description:
      "Advanced algorithms recommend scholarships based on your profile.",
    icon: <GraduationCap className="w-6 h-6 text-green-600" />,
    bg: "bg-green-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us">
      <div className="flex justify-between gap-8 items-center bg-[#224f6d25] p-10 rounded-4xl flex-wrap md:flex-nowrap">
        {/* Left Side: Features (60%) */}
        <div className="w-full md:w-[60%]">
          <div className="space-y-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl shadow-sm bg-white hover:shadow-lg transition"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.bg}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image (40%) */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-xl max-w-sm w-full">
            <img
              src={whyChooseUs}
              alt="Scholarship support"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

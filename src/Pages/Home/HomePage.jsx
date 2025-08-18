import React from "react";
import Slider from "./Slider";
import TopScholarship from "./TopScholarship/TopScholarship";
import { Helmet } from "react-helmet-async";
import ExploreByCountry from "./ExploreByCountry/ExploreByCountry";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HowItWorks from "./HowItWorks/HowItWorks";
import ClosingSoon from "./ClosingSoon/ClosingSoon";
import StudentSuccessStories from "./StudentSuccessStories/StudentSuccessStories";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4">
      <Helmet>
        <title>Home || Edufellow</title>
      </Helmet>
      {/* Slider */}
      <div className="mb-20">
        <Slider></Slider>
      </div>

      {/* Scholarship Categories */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Explore by Country
            </h1>
          </div>
        </div>

        <div className="mt-8">
          <ExploreByCountry />
        </div>
      </div>

      {/* Top Scholarships */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Top Scholarships
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <TopScholarship />
        </div>
      </div>

      {/* Closing Soon */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Closing Soon
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <ClosingSoon></ClosingSoon>
        </div>
      </div>
      {/* Best Match With You */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Best Match With You
            </h1>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
      {/* Student FAQs */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Student FAQs
            </h1>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>

      {/* Success Stories */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Student Success Stories
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <StudentSuccessStories></StudentSuccessStories>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              Why Choose Us
            </h1>
          </div>
        </div>

        <div className="mt-8">
          <WhyChooseUs />
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-20">
        <div className="flex justify-center">
          <div className="inline-block transform -skew-x-12 bg-gradient-to-r from-cyan-800 to-cyan-950 px-8 py-4 shadow-lg rounded-md">
            <h1 className="transform skew-x-12 text-white text-3xl font-bold uppercase tracking-wide">
              How It Works
            </h1>
          </div>
        </div>
        <div className="mt-8">
          <HowItWorks />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

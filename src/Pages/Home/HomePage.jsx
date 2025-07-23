import React from "react";
import Slider from "./Slider";
import TopScholarship from "./TopScholarship/TopScholarship";
import { Helmet } from "react-helmet-async";
import ExploreByCountry from "./ExploreByCountry/ExploreByCountry";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import HowItWorks from "./HowItWorks/HowItWorks";

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
        <h1 className="mb-8 text-center ">Explore by Country</h1>
        <ExploreByCountry></ExploreByCountry>
      </div>

      {/* Top Scholarships */}
      <div className="mb-20">
        <h1 className="mb-8 text-center ">Top Scholarships</h1>
        <TopScholarship></TopScholarship>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h1 className="mb-8 text-center ">Why Choose Us</h1>
        <WhyChooseUs></WhyChooseUs>
      </div>

      {/* Success Stories */}

      {/* How It Works */}
      <div className="mb-20">
        <h1 className="mb-8 text-center ">How It Works</h1>
        <HowItWorks></HowItWorks>
      </div>
    </div>
  );
};

export default HomePage;

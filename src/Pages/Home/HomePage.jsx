import React from "react";
import Slider from "./Slider";
import TopScholarship from "./TopScholarship/TopScholarship";
import { Helmet } from "react-helmet-async";
import ExploreByCountry from "./ExploreByCountry/ExploreByCountry";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4">
      <Helmet>
        <title>Home || Edufellow</title>
      </Helmet>
      {/* Slider */}
      <div className="mb-15">
        <Slider></Slider>
      </div>

      {/* Scholarship Categories */}
      <div className="mb-15">
        <h1 className="mb-8">Explore by Country</h1>
        <ExploreByCountry></ExploreByCountry>
      </div>

      {/* Top Scholarships */}
      <div className="mb-15">
        <h1 className="mb-8">Top Scholarships</h1>
        <TopScholarship></TopScholarship>
      </div>

      {/* Why Choose Us */}
      <div className="mb-15">
        <h1 className="mb-8">Why Choose Us</h1>
        <WhyChooseUs></WhyChooseUs>
      </div>

      {/* Success Stories */}

      {/* How It Works */}
      <div className="mb-15">
        <h1 className="mb-8">How It Works</h1>
      </div>
    </div>
  );
};

export default HomePage;

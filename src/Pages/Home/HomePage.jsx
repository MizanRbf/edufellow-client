import React from "react";
import Slider from "./Slider";
import TopScholarship from "./TopScholarship/TopScholarship";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4">
      {/* Slider */}
      <div className="mb-15">
        <Slider></Slider>
      </div>

      {/* Top Scholarships */}
      <div className="mb-15">
        <h1 className="mb-8">Top Scholarships</h1>
        <TopScholarship></TopScholarship>
      </div>

      {/* Popular Universities */}
      <div className="mb-15">
        <h1 className="mb-8">Popular Universities</h1>
      </div>

      {/* Scholarship Categories */}
      <div className="mb-15">
        <h1 className="mb-8">Scholarship Categories</h1>
      </div>

      {/* Why Choose Us */}
      <div className="mb-15">
        <h1 className="mb-8">Why Choose Us</h1>
      </div>

      {/* Success Stories */}
      <div className="mb-15">
        <h1 className="mb-8">Success Stories</h1>
      </div>

      {/* How It Works */}
      <div className="mb-15">
        <h1 className="mb-8">How It Works</h1>
      </div>

      {/* Newsletter */}
      <div className="mb-15">
        <h1 className="mb-8">Newsletter</h1>
      </div>
    </div>
  );
};

export default HomePage;

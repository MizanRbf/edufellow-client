import React from "react";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4">
      {/* Slider */}
      <div className="mb-15">
        <Slider></Slider>
      </div>

      {/* Top Sholarship */}
      <div className="mb-15">
        <h1>Top Scholarship</h1>
      </div>

      {/* Popular Universities */}
      <div className="mb-15">
        <h1>Popular Universities</h1>
      </div>

      {/* Scholarship Categories */}
      <div className="mb-15">
        <h1>Scholarship Categories</h1>
      </div>

      {/* Why Choose Us */}
      <div className="mb-15">
        <h1>Why Choose Us</h1>
      </div>

      {/* Success Stories */}
      <div className="mb-15">
        <h1>Success Stories</h1>
      </div>

      {/* How It Works */}
      <div className="mb-15">
        <h1>How It Works</h1>
      </div>

      {/* Newsletter */}
      <div className="mb-15">
        <h1>Newsletter</h1>
      </div>
    </div>
  );
};

export default HomePage;

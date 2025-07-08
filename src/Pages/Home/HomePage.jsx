import React from "react";
import Slider from "./Slider";

const HomePage = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-4">
      {/* Slider */}
      <div className="mb-15">
        <Slider></Slider>
      </div>

      {/* All Sholarship */}
      <div className="mb-15">
        <h1>All Scholarship</h1>
      </div>

      {/* Extra - 1 */}
      <div className="mb-15">
        <h1>Extra - 1</h1>
      </div>

      {/* Extra - 2 */}
      <div className="mb-15">
        <h1>Extra - 2</h1>
      </div>
    </div>
  );
};

export default HomePage;

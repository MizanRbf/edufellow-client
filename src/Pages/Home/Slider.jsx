import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../public/Banner/banner1.png";
import bannerImg2 from "../../../public/Banner/banner2.png";
import bannerImg3 from "../../../public/Banner/banner3.png";

const Slider = () => {
  return (
    <div className="pt-24 md:pt-30">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="relative">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px] "
            src={bannerImg1}
          />

          <div className="p-2 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#020202b7]">
            <p className="text-base md:text-4xl lg:text-6xl font-bold md:mb-4">
              🎓 100% Tuition-Free Scholarship!
            </p>
            <p className=" mb-6 ml-6 md:ml-16 lg:ml-25 text-xs md:text-xl lg:text-2xl">
              Apply now and unlock your dream of higher education.
            </p>
          </div>
        </div>
        {/* Slider-2 */}
        <div className="relative">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src={bannerImg2}
          />

          <div className="p-2 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#020202b7]">
            <p className="text-base md:text-4xl lg:text-6xl font-bold md:mb-4">
              🌍 Study Abroad with Scholarships!
            </p>
            <p className=" mb-6 ml-6 md:ml-16 lg:ml-25 text-xs md:text-lg lg:text-xl">
              Get up to 80% off tuition at top-ranked universities.
            </p>
          </div>
        </div>
        {/* Slider-3 */}
        <div className="relative">
          <div className="p-2 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#020202b7]">
            <p className="text-base md:text-4xl lg:text-6xl font-bold md:mb-4">
              💡 Financial Aid Scholarships Available
            </p>
            <p className=" mb-6 ml-6 md:ml-16 lg:ml-25 text-xs md:text-lg lg:text-xl">
              Empowering students from low-income families.
            </p>
          </div>

          <img className="md:h-[450px] lg:h-[500px]" src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

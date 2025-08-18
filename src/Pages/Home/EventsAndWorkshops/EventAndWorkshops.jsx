import React from "react";
import Swal from "sweetalert2";
const event = {
  id: 1,
  title: "Erasmus Scholarship Webinar",
  date: "August 25, 2025",
  time: "5:00 PM GMT+6",
  speaker: "Rahim Khan",
  description:
    "Learn step-by-step how to apply for Erasmus scholarships in Europe.",
  link: "/register/erasmus-webinar",
};
const EventAndWorkshops = () => {
  const handleRegister = () => {
    Swal.fire({
      title: "Registered Successfully!",
      text: "You have successfully registered for the event.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  return (
    <div className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-bl from-[#0b7e01] to-[#00252e] text-white flex flex-col md:flex-row justify-between items-center lg:pl-20 md:pl-10">
      <div className="p-4">
        <p className="text-xl lg-text-5xl md:text-3xl font-semibold mb-2">
          {event.title}
        </p>
        <p className="mb-8 text-orange-300">
          {event.date} | {event.time}
        </p>
        <p className="mb-8 text-[#16b102] lg:text-6xl text-2xl md:text-5xl font-bold">
          Speaker: {event.speaker}
        </p>
        <p className="mb-8 text-xs md:text-base lg:text-base bg-white text-black rounded-full px-10 py-1">
          {event.description}
        </p>
        <button
          onClick={handleRegister}
          className="inline-block bg-green-600 text-white px-4 md:px-10 py-2 md:py-4 rounded hover:bg-green-700 transition-colors duration-300 font-bold"
        >
          Register Now
        </button>
      </div>
      <div>
        <img className="md:w-80 w-110" src="/assets/speaker.png" alt="" />
      </div>
    </div>
  );
};

export default EventAndWorkshops;

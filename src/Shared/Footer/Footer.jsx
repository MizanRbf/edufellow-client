import React, { useRef } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Footer = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1tl7k8c",
        "template_88eueta",
        form.current,
        "eE11Jr1RKLDjHi_0W"
      )
      .then(
        () => {
          Swal.fire({
            title: "Mail Sent Successfully!",
            icon: "success",
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Error: " + error.text);
        }
      );
  };
  return (
    <footer className="bg-secondary text-white px-6 md:px-12 py-12 border-t-4 border-primary">
      <div className="max-w-[1800px] mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Contact */}
        <div>
          <img
            src="/assets/logo.png"
            alt="Company Logo"
            className="w-32 mb-6"
          />
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaLocationDot className="mt-1" />
              <span>
                16 Sector, Cantonment,
                <br />
                Uttara-1209, Dhaka-1214
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp />
              +880-1319444554
            </li>
            <li className="flex items-center gap-2">
              <IoMail />
              mailus@gmail.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-sm *:hover:underline">
            <Link to="/">Home</Link>
            <Link to="/allScholarship">All Scholarships</Link>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
          <div className="flex gap-4 text-2xl *:hover:text-primary">
            <a href="https://github.com/MizanRbf">
              <FaGithub />
            </a>
            <a href="https://x.com/MizanRbf">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/mizanrbf/">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Email Form */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Email Us</h4>
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user's_opinion"
              placeholder="Your email or opinion"
              className="input input-bordered w-full text-black"
            />
            <button type="submit" className="btn btn-primary w-full">
              Send Email
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-10 mt-10 border-t border-white/30 text-center text-sm">
        <p>© {new Date().getFullYear()} Edufellow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

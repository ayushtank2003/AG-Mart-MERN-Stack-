import React from "react";
import {
  AiOutlineLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p>Ayush Mart made with 💜</p>
      <p className="flex gap-3">
        <a href="https://github.com/ayushtank2003">
          <AiFillGithub className="text-2xl text-gray-800" />
        </a>
        <a href="https://www.linkedin.com/in/ayush-kumar-tank//">
          {" "}
          <AiOutlineLinkedin className="text-2xl text-gray-800" />
        </a>
      </p>
    </div>
  );
};

export default Footer;

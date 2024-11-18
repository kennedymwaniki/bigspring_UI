import React from "react";
import banner from "../../public/banner-art.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen w-full text-center gap-48 mx-auto  gap-y-2">
      <h1 className="text-black mt-16 font-semibold text-5xl p-4 text-wrap">
        Let us solve your critical website
        <br />
        development challenges
      </h1>
      <p className="mt-6">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil
          enim maxime corporis cumque
          <br />
          totam aliquid nam sint inventore optio modi neque laborum officiis
          necessitatibus.
        </span>
      </p>
      <Image src={banner} alt="banner" className="mt-12 mx-auto" height={400} />
    </div>
  );
};

export default Hero;

import Image from "next/image";
import React from "react";
import banner from "../public/banner-art.svg";
const page = () => {
  return (
    <div className="min-h-screen w-full text-center gap-48 mx-auto container gap-y-2">
      <h1 className="text-black mt-16 font-bold text-5xl p-4">
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

export default page;

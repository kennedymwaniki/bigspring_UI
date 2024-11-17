import Image from "next/image";
import React from "react";
import code from "../../public/code.svg";
import oop from "../../public/oop.svg";
import userclock from "../../public/user-clock.svg";
import love from "../../public/love.svg";
import speed from "../../public/speedometer.svg";
import cloud from "../../public/cloud.svg";
const ToKnow = () => {
  return (
    <section className="bg-teal-50 text-center mt-6  sm:p-6">
      <h1 className="text-black font-semibold text-4xl">
        Something You Need To Know
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-5 gap-x-8 gap-y-6">
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image src={code} alt="" height={30} width={30} className="mx-auto" />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image src={oop} alt="" height={30} width={30} className="mx-auto" />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image
            src={userclock}
            alt=""
            height={30}
            width={30}
            className="mx-auto"
          />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image src={love} alt="" height={30} width={30} className="mx-auto" />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image
            src={speed}
            alt=""
            height={30}
            width={30}
            className="mx-auto"
          />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
        <div className="text-black rounded-xl shadow-lg p-5 pb-8 bg-white">
          <Image
            src={cloud}
            alt=""
            height={30}
            width={30}
            className="mx-auto"
          />
          <div className="mt-4">
            <h3 className="text-black font-semibold text-xl">Clean Code</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam nihil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToKnow;

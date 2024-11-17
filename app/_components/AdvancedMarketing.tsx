import Link from "next/link";
import { ImageSlider } from "./ImageSlider";
import { FaArrowRight } from "react-icons/fa6";

const AdvancedMarketing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white p-24 gap-x-8 mx-auto">
      <div className="space-y-4 mt-6">
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
          It is the most advanced digital marketing and it company.
        </h1>
        <p className="text-gray-600 space-y-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          tristique eget amet, tempus eu at consecttur. Leo facilisi nunc
          viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing
          elit.
        </p>
        <Link
          href="/contact"
          className="text-teal-400 mt-16 flex items-center gap-2"
        >
          <p>Check it out</p>
          <FaArrowRight className="hover:animate-ping" />
        </Link>
      </div>
      <div className="order-first md:order-last">
        <ImageSlider />
      </div>
    </div>
  );
};

export default AdvancedMarketing;

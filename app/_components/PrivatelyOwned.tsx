import Link from "next/link";
import serviceslider1 from "../../public/service-slide-1.webp";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const PrivatelyOwned = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-teal-50 md:p-24 p-3 gap-x-8 mx-auto">
      <div className="">
        <Image src={serviceslider1} width={600} height={600} alt="" />
      </div>
      <div className="space-y-3 mt-6">
        <h1 className="text-4xl font-semibold text-gray-900 leading-tight">
          It is a privately owned Information and cyber security company
        </h1>
        <p className="text-gray-600 space-y-6 py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          tristique eget amet, tempus eu at consecttur. Leo facilisi nunc
          viverra tellus. Ac laoreet sit vel consquat. consectetur adipiscing
          elit. Consequat tristique eget amet, tempus eu at consecttur. Leo
          facilisi nunc viverra tellus. Ac laoreet sit vel consquat.
        </p>
        <Link
          href="/contact"
          className="text-teal-400 mt-16 flex items-center gap-2"
        >
          <p>Check it out</p>
          <FaArrowRight className="hover:animate-ping" />
        </Link>
      </div>
    </div>
  );
};

export default PrivatelyOwned;

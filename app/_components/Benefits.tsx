
import banner from "../../public/banner.svg";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className="h-auto w-auto text-center gap-48 mx-auto  gap-y-2">
      <h1 className="text-black mt-16 font-semibold text-3xl p-4 text-wrap">
        Experience the best
        <br />
        workflow with us
      </h1>

      <Image src={banner} alt="banner" className="mt-12 mx-auto" height={400} />
    </div>
  );
};

export default Benefits;

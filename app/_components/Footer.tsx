import Link from "next/link";
import logo from "../../public/logo.webp";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedin, FaSkype } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 p-8">
        <div className="grid gap-y-2">
          <h2 className="text-black font-semibold text-xl">Company</h2>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link
            href="/quick-start"
            className="text-gray-600 hover:text-gray-900"
          >
            Quick Start
          </Link>
        </div>

        <div className="grid gap-y-2">
          <h2 className="text-black font-semibold text-xl">Product</h2>
          <Link href="/features" className="text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="/platform" className="text-gray-600 hover:text-gray-900">
            Platform
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
        </div>

        <div className="grid gap-y-2">
          <h2 className="text-black font-semibold text-xl">Support</h2>
          <Link href="/faq" className="text-gray-600 hover:text-gray-900">
            FAQ
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-600 hover:text-gray-900"
          >
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-gray-900">
            Terms & Conditions
          </Link>
        </div>

        <div className="grid gap-y-4">
          <Image src={logo} alt="Bigspring Logo" className="h-8 w-auto" />
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur elit. Consjat tristique eget
            amet, tempus eu at cttur.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-cyan-500">
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500">
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-cyan-500">
              <FaSkype className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

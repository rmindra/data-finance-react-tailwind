/* eslint-disable no-unused-vars */
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div className="flex flex-col justify-center">
        <h1 className="w-full text-3xl text-[#00df9a] font-semibold">REACT.</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          necessitatibus repellendus nemo cumque? Dolor veritatis neque ex
          expedita, saepe voluptas quos quas rerum.
        </p>
        <div className="flex my-6 gap-8">
          <FaDribbbleSquare
            className="hover:fill-[#00df9a] cursor-pointer"
            size={45}
          />
          <FaFacebookSquare
            className="hover:fill-[#00df9a] cursor-pointer"
            size={45}
          />
          <FaGithubSquare
            className="hover:fill-[#00df9a] cursor-pointer"
            size={45}
          />
          <FaInstagram
            className="hover:fill-[#00df9a] cursor-pointer"
            size={45}
          />
          <FaTwitterSquare
            className="hover:fill-[#00df9a] cursor-pointer"
            size={45}
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6 lg:mt-0">
        <div>
          <h6 className="font-medium text-gray-400 text-lg pb-4">Solutions</h6>
          <ul>
            <li className="py-2 text-md">Analytics</li>
            <li className="py-2 text-md">Marketing</li>
            <li className="py-2 text-md">Commerce</li>
            <li className="py-2 text-md">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-lg pb-4">Support</h6>
          <ul>
            <li className="py-2 text-md">Pricing</li>
            <li className="py-2 text-md">Documentation</li>
            <li className="py-2 text-md">Guides</li>
            <li className="py-2 text-md">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-lg pb-4">Company</h6>
          <ul>
            <li className="py-2 text-md">About</li>
            <li className="py-2 text-md">Blog</li>
            <li className="py-2 text-md">Jobs</li>
            <li className="py-2 text-md">Press</li>
            <li className="py-2 text-md">Carrers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-lg pb-4">Legal</h6>
          <ul>
            <li className="py-2 text-md">Claim</li>
            <li className="py-2 text-md">Policy</li>
            <li className="py-2 text-md">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

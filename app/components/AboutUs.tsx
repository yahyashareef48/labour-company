import { HoverEffect } from "./ui/card-hover-effect";
import { FaRegLightbulb } from "react-icons/fa";
import { TbClockCheck } from "react-icons/tb";
import { FaHelmetSafety } from "react-icons/fa6";
import { BiNetworkChart } from "react-icons/bi";
import { PiHandshake } from "react-icons/pi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function AboutUs() {
  return (
    <div>
      <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
        About <span className="text-[#ffe101]">Labour</span> Company
      </h2>
      <p className="mb-5 text-center font-light sm:text-xl">
        Your Trusted Partner in Workforce Solutions
      </p>

      <p className="mb-5 text-center max-w-screen-md font-light sm:text-lg text-sm mx-auto text-gray-400">
        At{" "}
        <span className="text-white">
          <span className="text-[#ffe101]">Labour</span> Company
        </span>
        , we specialize in providing skilled and reliable manpower for various industries, including
        construction, factories, warehouses, and more. Our experienced workers ensure your projects
        run smoothly and efficiently.
      </p>

      <HoverEffect items={WhyChooseUsPoints} />
    </div>
  );
}

const WhyChooseUsPoints = [
  {
    title: "Experience and Expertise",
    description:
      "Our team comprises highly trained professionals who bring years of experience and a commitment to excellence.",
    icon: <FaRegLightbulb />,
  },
  {
    title: "Comprehensive Solutions",
    description:
      "From civil contractors to sub-contractors and labor contractors, our extensive network covers all your workforce needs.",
    icon: <BiNetworkChart />,
  },
  {
    title: "Reliability",
    description:
      "Count on us for dependable manpower that meets your project's demands efficiently and on time.",
    icon: <TbClockCheck />,
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure the highest standards of quality in every project. Our rigorous selection process and continuous training programs guarantee that our workers deliver superior performance.",
    icon: <IoShieldCheckmarkOutline />,
  },
  {
    title: "Safety First",
    description:
      "We prioritize safety by equipping our workers with multicolored safety construction hats and adhering to strict safety protocols.",
    icon: <FaHelmetSafety />,
  },

  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our priority. We work closely with you to understand your specific requirements and provide tailored solutions that align with your project goals.",
    icon: <PiHandshake />,
  },
];

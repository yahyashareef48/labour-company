import { HoverEffect } from "./ui/card-hover-effect";

export default function AboutUs() {
  return (
    <div className="lg:px-6 px-4 py-8 lg:py-16">
      <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
        About <span className="text-[#ffe101]">Labour</span> Company
      </h2>
      <p className="mb-5 text-center font-light sm:text-xl">
        Your Trusted Partner in Workforce Solutions
      </p>

      <p className="mb-5 text-center max-w-screen-md font-light sm:text-lg text-sm mx-auto text-gray-400">
        At <span className="text-[#ffe101]">Labour</span> Company, we excel in delivering skilled
        and reliable manpower for a diverse range of industries, including construction, factories,
        warehouses, and more. Our team of experienced professionals ensures that your projects run
        seamlessly and efficiently, providing you with the peace of mind and support needed to
        achieve your goals.
      </p>

      <div>
        <HoverEffect items={WhyChooseUsPoints} />
      </div>
    </div>
  );
}

const WhyChooseUsPoints = [
  {
    title: "Experience and Expertise",
    description:
      "Our team comprises highly trained professionals who bring years of experience and a commitment to excellence.",
  },
  {
    title: "Reliability",
    description:
      "Count on us for dependable manpower that meets your project's demands efficiently and on time.",
  },
  {
    title: "Safety First",
    description:
      "We prioritize safety by equipping our workers with multicolored safety construction hats and adhering to strict safety protocols.",
  },
  {
    title: "Comprehensive Solutions",
    description:
      "From civil contractors to sub-contractors and labor contractors, our extensive network covers all your workforce needs.",
  },
];

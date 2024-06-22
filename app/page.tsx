import dynamic from "next/dynamic";

import Link from "next/link";
import MagicButton from "./components/ui/MagicButton";

const Services = dynamic(() => import("./components/Services"), {
  loading: () => (
    <div className="min-h-96 flex items-center">
      <p className="text-center w-full">Loading...</p>
    </div>
  ),
});

const AboutUs = dynamic(() => import("./components/AboutUs"), {
  loading: () => (
    <div className="min-h-96 flex items-center">
      <p className="text-center w-full">Loading...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="dark">
      <section
        id="above-the-fold"
        className="bg-[#00000060] bg-[url('/hero-bg.webp')] bg-center bg-no-repeat min-h-[600px] bg-cover bg-blend-multiply flex items-center transition-all"
      >
        <div className="max-w-7xl w-full m-auto text-white px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center">
              Your One-Stop Solution for{" "}
              <span className="text-[#ffe101]">All Types of Labour Needs</span>
            </h1>
            <p className="max-w-4xl mt-4 text-center">
              We provide manpower solutions tailored to your specific requirements. Whether you need
              skilled labour, general workers, or specialized contractors, we supply reliable and
              efficient personnel for all types of industries. Our extensive network ensures that
              you get the right people for the job, improving productivity and meeting your project
              deadlines.
            </p>
            <Link href="#contact" className="w-full md:w-60">
              <MagicButton title="Contact Us" />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-900">
        <Services />
      </section>

      <section id="about-us" className="bg-gray-950">
        <AboutUs />
      </section>
    </main>
  );
}

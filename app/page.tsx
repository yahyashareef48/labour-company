import dynamic from "next/dynamic";

import Link from "next/link";
import MagicButton from "./components/ui/MagicButton";
import { ImInstagram } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";
import Navbar from "./components/Navbar";

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

const Testimonials = dynamic(() => import("./components/Testimonials"), {
  loading: () => (
    <div className="min-h-96 flex items-center">
      <p className="text-center w-full">Loading...</p>
    </div>
  ),
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => (
    <div className="min-h-96 flex items-center">
      <p className="text-center w-full">Loading...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="dark">
      <Navbar />

      <header
        id="above-the-fold"
        className="bg-[#00000080] bg-[url('/hero-bg.webp')] bg-center bg-no-repeat min-h-[600px] bg-cover bg-blend-multiply flex items-center transition-all"
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
      </header>

      <section id="services" className="bg-gray-900 lg:px-6 px-4 py-8 lg:py-16">
        <Services />
      </section>

      <section id="about-us" className="bg-gray-950 lg:px-6 px-4 py-8 lg:py-16">
        <AboutUs />
      </section>

      <section id="reviews" className="bg-gray-900 lg:px-6 px-4 py-8 lg:py-16">
        <Testimonials />
      </section>

      <section id="contact" className="bg-gray-950 lg:px-6 px-4 py-8 lg:py-16">
        <Contact />
      </section>

      <footer className="bg-gray-900 lg:px-6 px-4 py-4">
        <div className="max-w-screen-xl mx-auto md:flex justify-between items-center">
          <p className="text-sm leading-[1.6] text-gray-100 font-normal">
            © 2024 Daily Labour Hub (OPC) Pvt Ltd. All Rights Reserved.
          </p>

          <p className="text-sm leading-[1.6] text-gray-100 font-normal md:mt-0 mt-6">
            Designed & Developed by Yahya Shareef
            <span className="flex gap-4 mt-3 md:mx-auto max-w-fit">
              <Link
                className="bg-[rgb(79,70,229)] p-2 rounded"
                href="https://x.com/shareef_yahya1"
                aria-label="Yahya Shareef Twitter"
              >
                <FaXTwitter />
              </Link>
              <Link
                className="bg-[rgb(79,70,229)] p-2 rounded"
                href="https://linkedin.com/in/yahiya-shareef/"
                aria-label="Yahya Shareef LinkedIn"
              >
                <LiaLinkedin />
              </Link>
              <Link
                className="bg-[rgb(79,70,229)] p-2 rounded"
                href="https://instagram.com/yahya_shareef1/"
                aria-label="Yahya Shareef Instagram"
              >
                <ImInstagram />
              </Link>
              <Link
                className="bg-[rgb(79,70,229)] p-2 rounded"
                href="https://facebook.com/profile.php?id=61558586026851"
                aria-label="Yahya Shareef Facebook"
              >
                <FaFacebook />
              </Link>
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}

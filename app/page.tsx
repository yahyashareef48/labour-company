import Link from "next/link";
import MagicButton from "./components/ui/MagicButton";

export default function Home() {
  return (
    <main>
      <section
        id="above-the-fold"
        className="bg-[#00000060] bg-[url('/hero-bg.webp')] bg-center bg-no-repeat min-h-[600px] bg-cover bg-blend-multiply flex items-center transition-all"
      >
        <div className="max-w-7xl w-full m-auto text-white px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">
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
              <MagicButton title="Contact us" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";

type TestimonialType = {
  image?: string | null;
  review: string;
  name: string;
  occupation: string;
};

export default function Testimonials() {
  return (
    <div>
      <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Testimonials
      </h2>
      <p className="mb-5 font-light text-center text-white sm:text-xl">
        Hear from Our Satisfied Clients
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard {...testimonial} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ image, review, name, occupation }: TestimonialType) {
  return (
    <div className="rounded-2xl h-full w-full px-8 py-6 overflow-hidden bg-gray-800">
      <Image
        src={image ? image : "/blank-profile-pic.webp"}
        width={50}
        height={50}
        alt="profile image"
        className="mb-6 mx-auto rounded-full"
      />
      <p className="text-center text-sm leading-[1.6] text-gray-100 font-normal">{review}</p>
      <p className="text-center text-sm leading-[1.6] text-gray-400 font-normal mt-6">{name}</p>
      <p className="text-center text-sm leading-[1.6] text-gray-400 font-normal">{occupation}</p>
    </div>
  );
}

const testimonialsData: TestimonialType[] = [
  {
    review:
      "We relied on Labour Company's manpower for our site's success. Their workers were dedicated and skilled, ensuring quality construction.",
    name: "Deepak Sharma",
    occupation: "Construction Supervisor",
  },
  {
    review:
      "Labour Company provided us with excellent electrical technicians, contributing significantly to our factory's operational efficiency.",
    name: "Ritu Patel",
    occupation: "Factory Manager",
  },
  {
    review:
      "Thanks to labour Company's loading/unloading crew, our logistics operations have been streamlined effectively.",
    name: "Gaurav Kumar",
    occupation: "Logistics Coordinator",
  },
  {
    review:
      "labour Company surpassed our expectations with their skilled workforce, ensuring our project milestones were achieved on time.",
    name: "Manoj Singh",
    occupation: "Site Engineer",
  },
  {
    review:
      "Reliable and efficient, labour Company provided us with capable manpower that adapted seamlessly to our warehouse operations.",
    name: "Pooja Sharma",
    occupation: "Warehouse Supervisor",
  },
  {
    review:
      "labour Company demonstrated professionalism and dedication throughout our project, making them our preferred choice for future endeavors.",
    name: "Sanjay Reddy",
    occupation: "Project Manager",
  },
];

import Image from "next/image";
import magnifyingGif from "../../public/images/magGlassGif.gif";

const About = () => {
  return (
    <section className="bg-gray-50 font__poppins" id="About_Us">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-green-500 uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl font__poppins">
            Inspring the Next Programmers
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 font__poppins">
            <div className="sm:text-left text-center">
              <dt className="text-2xl font-bold text-gray-900 font__poppins md:text-left sm:text-left text-center">
                Our Mission
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Our high school app and website development club aims to foster a collaborative environment where students can sharpen their coding and design skills. Through hands-on projects and activities, we seek to empower members with the expertise needed to excel in software development, nurturing a passion for innovation and problem-solving.
              </dd>
            </div>
            <div className="mx-auto w-52 border-2 hover:scale-110 duration-500 hover:rotate-2 md:hidden sm:block block shadow-sm">
              <Image
                src="/images/team.png"
                alt="About Us Image"
                className=""
                width={500}
                height={500}
              />
            </div>
            <div className="sm:text-left text-center">
              <dt className="text-2xl font-bold text-gray-900 font__poppins ">
                Our Vision
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                We envision our club as a catalyst for student-driven innovation, cultivating a community of tech enthusiasts poised to make a mark in the digital realm. By providing opportunities for real-world application and collaboration with industry experts, we aspire to equip our members with the tools and mindset to thrive in the ever-evolving landscape of technology.
              </dd>
            </div>
            <div className="mx-auto w-36 border-2 hover:scale-110 duration-500 hover:rotate-2 md:hidden sm:block block shadow-sm">
              <Image src={magnifyingGif} alt="Magnifying Gif" className="" />
            </div>
          </dl>
        </div>
        <div className="hidden md:flex md:justify-center md:col-span-5 text-black w-[50%] mx-auto">
          <Image
            src="/images/team.png"
            alt="About Us Image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

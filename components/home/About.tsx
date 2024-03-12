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
            Saving Animal Lives Through Adoption
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 font__poppins">
            <div className="sm:text-left text-center">
              <dt className="text-2xl font-bold text-gray-900 font__poppins md:text-left sm:text-left text-center">
                Our Mission
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                To lighten the load of shelters and rescues by providing a
                platform for them to connect with potential adopters and donors.
                We hope to make the adoption process easier for both the adopter
                and the shelter/rescue.
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
                We hope to create a world in which pets are able to find happy
                homes, and where shelters and rescues are able to find the
                resources they need to continue rescuing and helping animals.
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

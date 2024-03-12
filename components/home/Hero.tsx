import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white pt-32 w-full h-[100vh]" id="Home">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-28 lg:flex lg:justify-between lg:text-left text-center flex-row justify-center">
        <div className="flex justify-center -mt-32 lg:hidden text-black">
          <Image
            src="/images/computer.jpg"
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
        <div className="mr-6 place-self-center lg:col-span-7 mx-auto ml-8">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold text-black leading-none tracking-tight md:text-5xl xl:text-6xl">
            Welcome to MV&#39;s <br/> App and Web Dev Club!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl font__poppins">
            Join our 15+ year club at Monta Vista High School for iOS, Android, and Web development. Access workshops, projects, and mentorship to thrive in software development. Unleash your creativity with us!
          </p>
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            {/* <button className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-green-500 border border-green-600 rounded-lg sm:w-auto focus:ring-4 focus:ring-green-300">
                      Get Started &nbsp;<i className="right-arrow"></i>
                  </button> */}
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex text-black mx-auto">
          <Image
            src="/images/computer.jpg"
            alt="hero image"
            className="rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

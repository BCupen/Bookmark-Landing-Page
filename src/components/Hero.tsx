const Hero = () => {
  return <div className="w-full flex flex-col-reverse md:flex-row gap-12 items-center py-10">
    <HeroText />
    <HeroImage />
  </div>;
};

const HeroText = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col gap-6">
      <h1 className="font-semibold text-neutral-blue-200 text-3xl md:text-5xl tracking-wider text-center md:text-left">A Simple Bookmark Manager</h1>
      <p className="text-neutral-blue-100 tracking-wider text-[18px] text-center md:text-left">
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <span className="flex items-center gap-3 justify-center md:justify-start px-6 md:px-0">
        <button className="cursor-pointer shadow-md rounded-md border-2 border-primary-blue bg-primary-blue hover:bg-white text-white hover:text-primary-blue tracking-wide py-3 px-4 md:px-6 font-semibold">Get it on Chrome</button>
        <button className="cursor-pointer shadow-md rounded-md border-2 border-transparent hover:border-neutral-blue-200 bg-neutral-blue-100 bg-opacity-10 hover:bg-white text-neutral-blue-100 tracking-wide py-3 px-4 md:px-6 font-semibold">Get it on Firefox</button>
      </span>
    </div>
  );
};

const HeroImage = () => {
    return (
        <div className="w-full md:w-[50%] relative">
            <div className="w-[80%] h-[70%] bg-primary-blue absolute bottom-0 right-0 -z-10 rounded-l-full" />
            <img src="./images/illustration-hero.svg" alt="hero"/>
            
        </div>
    )
}

export default Hero;

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between md:pr-5 py-10">
  <div className="flex flex-col items-center md:justify-start md:items-start justify-center gap-5 text-center lg:text-left">
    <p className="text-[40px] md:text-[56px] font-[700] md:w-[429px]">
    Rent a luxury shared car for<span className="text-secondary"> €2.5 per hour</span>
    </p>
    <p className="text-tertiary w-[80%] text-base font-[500] md:w-[238px]">
      No deposit. There's a plan that works for everyone.
    </p>
  </div>
  <div className="mt-10 lg:mt-0 items-center flex justify-center lg:justify-end">
    <img className="w-full md:w-[400px]" src="images/Savings-rafiki 2.png" alt="Kolo logo" />
  </div>
</div>

  );
}

export default Hero;







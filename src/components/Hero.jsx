
const Hero = () => {
  return (
    <div className="flex justify-between py-20">
        <div className="flex flex-col gap-5">
            <p className="md:w-[429px] text-[56px] font-[700]">Huur luxe deelauto voor <p className="text-secondary">€2,5 per uur</p></p>
            <p className="md:w-[238px] text-tertiary font-[500]">No deposit. There a plan that works for everyone.</p>
        </div>
        <div>
            <img src="images/Savings-rafiki 2.png" alt="Kolo logo" />
        </div>
    </div>
  )
}

export default Hero
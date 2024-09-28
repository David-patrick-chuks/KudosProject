import { AiFillInfoCircle } from "react-icons/ai";

const PricingCard = ({ tag, sub, sub_price, price, maand_price, tintini }) => {
  return (
    <div className="bg-card-bg p-6 relative flex flex-col gap-3 rounded-2xl shadow-lg transition-transform duration-200 transform hover:scale-105">
      <p className="text-[#A7EBC4] text-sm uppercase font-medium">{sub}</p>
      <div className="flex text-white">
        <p className="text-[46px] flex items-end font-bold">€{price} </p>
        <span className="text-xl flex items-end font-medium">/ month</span>
      </div>
      <p className="text-white text-[16px] font-bold">Every month first {sub_price} hours free</p>
      <div className="flex gap-2 py-1 px-1 bg-intro-green border bg-opacity-20 border-intro-green rounded-full">
        <div className="my-auto"><AiFillInfoCircle size={20} color='#1CA556' /></div>
        <p className="text-white">saves €{maand_price} per hour</p>
      </div>
      <div>
        <p className="text-[#F4F4F4] text-[15px] md:text-base font-medium">€5 {tintini} / hours after hours off</p>
        <p className="text-[#F4F4F4] text-[14px] md:text-base font-medium">€0,24 / KM</p>
      </div>
      {tag && (
        <p className="px-4 py-1 bg-red-700 text-white absolute top-0 right-0 rounded-tr-2xl rounded-bl-2xl">
          {tag}
        </p>
      )}
    </div>
  );
};

export default PricingCard;

import { Link } from "react-router-dom"
import PricingCard from "./PricingCard"

const Pricing = () => {
    const cardList = [
        {
            sub: 'basis',
            sub_price: 10,
            price: 50,
            maand_price: "0,5",
            tintini: '4,5'
        },
        {
            tag: "meest gekozen",
            sub: 'plus',
            sub_price: 30,
            price: 100,
            maand_price: "50",
            tintini: '€2,5'
        },
        {
            sub: 'pro',
            sub_price: 80,
            price: 200,
            maand_price: "200",
            tintini: '€2,5'
        },
    ]
    
  return (
    <div className="bg-primary-gray px-[48px] py-[40px]">
        <div>
            <p className="text-tertiary md:w-[640px]"><span className="font-bold text-primary">Note:</span> Subscription can be different for each location based on extra services in some location. Go to your <Link className="text-primary underline font-semibold">location page</Link> to see specific prices</p>
        </div>
        <div className="bg-intro-green w-full rounded-lg text-white py-4 px-8">

        </div>
        <div className="flex gap-3">
            {cardList.map((item, index) => (
                <PricingCard
                    key={index}
                    maand_price={item.maand_price}
                    sub={item.sub}
                    price={item.price}
                    sub_price={item.sub_price}
                    tag={item.tag}
                    tintini={item.tintini}
                />
            ))}
        </div>
    </div>
  )
}

export default Pricing
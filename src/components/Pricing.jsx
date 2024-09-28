import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";
import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-base w-[90%] md:text-xl">{question}</h3>
        <span className={`transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼ {/* Arrow icon */}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 bg-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Pricing = () => {
  const [showMoreFAQs, setShowMoreFAQs] = useState(false);

  const cardList = [
    {
      sub: 'basis',
      sub_price: 10,
      price: 50,
      maand_price: "0,5",
      tintini: '4,5'
    },
    {
      tag: "Most popular",
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
  ];

  return (
    <div id="the-pricing" className="px-4 sm:px-8 lg:px-16">
      <p className="my-10 font-bold text-xl text-center">You can cancel your subscription <br />every month.</p>

      <div className="bg-primary-gray px-4 py-10 sm:px-[48px] sm:py-[40px]">
        <div>
          <p className="text-tertiary md:w-[640px] mx-auto mb-10 text-center">
            <span className="font-bold text-primary">Note:</span> Subscription can be different for each location based on extra services in some location. Go to your <Link className="text-primary ">location page</Link> to see specific prices.
          </p>
        </div>
        <div className="bg-intro-green w-full rounded-lg text-white py-4 px-8 mb-3">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="font-semibold text-2xl">Intro</p>
            <p className="mt-1.5 sm:ml-20">Start with free plan, no monthly payment</p>
            <p className="mt-1.5 sm:ml-auto">€5 / hour</p>
            <p className="mt-1.5 sm:ml-4">€0,24 / KM</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center cursor-pointer">
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

      {/* FAQ Section */}
      <div className="mt-20 mx-auto md:max-w-3xl md:p-6">
        <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">FAQ on Pricing</h2>

        {/* Initial FAQs */}
        <FAQItem 
          question="Will I be charged after completing each booking??" 
          answer="All eCars are subject to civil liability, with a deductible of €500. Our monthly business packages are completely free of deductibles." 
        />
        <FAQItem 
          question="How is monthly plan fee charged, end or start of month?" 
          answer="The monthly plan fee is charged at the start of each billing cycle. This ensures uninterrupted access to the service for the entire month" 
        />
        <FAQItem 
          question="Can I change my plan anytime I want?" 
          answer="Yes, you can change your plan at any time. Simply log into your account and adjust your subscription to fit your needs.." 
        />

        {/* Extra FAQs (hidden until 'Read More' is clicked) */}
        {showMoreFAQs && (
          <>
            <FAQItem 
              question="What happens if I change my plan?" 
              answer="Your changes will take effect immediately, and you'll be charged or refunded based on the new plan's price." 
            />
            <FAQItem 
              question="Do you offer annual billing?" 
              answer="Yes, we offer a 10% discount on annual subscriptions." 
            />
          </>
        )}

        {/* Read More button */}
        {!showMoreFAQs && (
          <div className="text-center mt-4">
            <button 
              onClick={() => setShowMoreFAQs(true)} 
              className="bg-blue-500 mb-5 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Read More FAQs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pricing;

"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How many people can be there in a team?',
      answer: 'Teams can have a minimum of 2 and a maximum of 3 members.',
    },
    {
      question: 'Who can participate in IEEE Xtreme 18.0??',
      answer: 'To participate, all team members must have an active IEEE global student membership and be part of the same IEEE Student Branch.',
    },
    {
      question: 'What kinds of challenges will participants face?',
      answer: 'Participants will solve a wide range of algorithmic problems designed to test their programming skills.',
    },
    {
      question: 'Does IEEE Xtreme 18.0 require any prior competitive programming experience?',
      answer: 'No prior experience is required, but basic coding knowledge will be beneficial.',
    },
    {
      question: 'Can a team consist of participants from different Student Branches?',
      answer: 'No, all team members must belong to the same IEEE Student Branch.',
    },
    {
      question: 'Do participants need to attend in person?',
      answer: 'Teams can participate either physically at their Student Branch or online, as IEEE Xtreme 18.0 is a global competition.',
    },
    {
      question: 'Will I get a certificate of participation?',
      answer: 'Yes, participants who solve at least one problem correctly will receive a certificate of participation.',
    },
    {
      question: 'How can I register for IEEE Xtreme 18.0?',
      answer: 'You can register via the official IEEE Xtreme 18.0 website.',
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-gray-900 p-6 rounded-lg">
     
      {faqItems.map((item, index) => (
        <div key={index} className="border-b border-gray-700 py-2">
          <div
            className="flex justify-between items-center cursor-pointer text-white text-lg font-semibold"
            onClick={() => handleClick(index)}
          >
            {item.question}
            <span className="text-2xl">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          <div
            className={`mt-2 overflow-hidden transition-all duration-300 ${
              activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-white mt-2">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

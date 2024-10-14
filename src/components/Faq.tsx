"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const faqItems: FAQItem[] = [
    {
      question: 'How many people can be there in a team?',
      answer: 'Teams can have a minimum of 2 and a maximum of 3 members.',
    },
    {
      question: 'Who can participate in IEEE Xtreme 18.0?',
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
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    
    setLoading(true); // Set loading to true
    setTimeout(() => {
      setActiveIndex(index);
      setLoading(false); // Set loading to false after 300ms
    }, 300); // Simulate loading time
  };

  return (
    <div className='bg-gradient-to-b from-[#f0f4f8] to-[#e0f7ff] min-h-screen justify-center items-center pt-2'>
      <div>
        <div className='text-4xl font-bold text-center text-[#000000] mb-8'>Frequently Asked Questions</div>
        <div className='text-1xl text-center text-[#000000] mb-8'>Answers to Help You Navigate the Expedition Series</div>
      </div>
      <div className="w-full max-w-xl mx-auto  p-6 rounded-lg">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-700 py-2">
            <div
              className="flex justify-between items-center cursor-pointer text-black text-lg font-semibold"
              onClick={() => handleClick(index)}
            >
              {item.question}
              <span className="text-2xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            {loading && activeIndex === index && ( // Show loading when the item is active
              <div className="flex justify-center items-center mt-2">
                <div className="loader" />
              </div>
            )}
            <div
              className={`mt-2 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-black mt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default FAQ;

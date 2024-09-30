"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What is the Expedition event series about?",
    answer: "The Expedition event series is a month-long celebration that includes IEEE Day and the IEEEXtreme coding competition. It features activities like a pre-hackathon and is designed to encourage student innovation and collaboration.",
  },
  {
    question: "How can I register for IEEE membership?",
    answer: "You can register for IEEE membership by clicking the \"Become a Member\" button on our homepage, which will take you directly to the IEEE membership form.",
  },
  {
    question: "Who can participate in IEEEXtreme?",
    answer:
      "IEEEXtreme is open to all IEEE student members who are enrolled in a recognized academic institution. Teams consist of up to three members, and all participants must be IEEE members.",
  },
  {
    question: "What is the deadline for IEEEXtreme registration?",
    answer:
      "The registration for IEEEXtreme closes on [Insert Date]. Be sure to sign up before this date to secure your spot in the competition.",
  },
];

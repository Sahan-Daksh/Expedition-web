import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.jpg";

const benefitOne = {
  title: "Why Join Our ISACA Chapter?",
  desc: "Become part of a vibrant community of IT professionals dedicated to advancing cybersecurity knowledge and skills.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Networking Opportunities",
      desc: "Connect with industry experts and like-minded individuals to expand your professional network and learn from their experiences.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Professional Development",
      desc: "Access exclusive resources, workshops, and certifications to enhance your cybersecurity knowledge and skills.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Career Advancement",
      desc: "Gain recognition and credibility within the cybersecurity field, opening doors to new opportunities and career growth.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};




export {benefitOne};

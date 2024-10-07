import { Button, Card } from "flowbite-react";

export function Cta() {
  return (
    <div className="flex justify-center">
        <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Become a Part of IEEE
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Join IEEE and connect with a vibrant community of tech enthusiasts. Gain access to exclusive resources, events, and networking opportunities that will enhance your skills and propel your career forward!
      </p>
      <Button>
        Join IEEE
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    <Card className="max-w-sm ml-[5%]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Challenge Yourself in IEEEXtreme
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Gear up for IEEEXtreme, a global 24-hour coding competition! Test your programming skills, collaborate with peers, and compete for exciting prizes. Register now to take on the challenge and showcase your talent!
      </p>
      <Button>
        Register for IEEEXtreme
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    <Card className="max-w-sm ml-[5%]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Prepare for Haxpedition with Our Road to Haxpedition Program
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Get ready for Haxpedition with our 'Road to Haxpedition' program! Each week, tackle easy and intermediate challenges that will sharpen your problem-solving skills. Join us on this journey and elevate your readiness for the hackathon!
      </p>
      <Button>
      Join the Road to Haxpedition
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    </div>
  );
}

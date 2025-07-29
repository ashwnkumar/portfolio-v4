import { IconMapRoute } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const notFoundMessages = [
  {
    header: "You Broke the Internet (Kinda)",
    desc: "Okay, not really. But this page is MIA. Let’s get you back to reality.",
  },
  {
    header: "Page Playing Hide and Seek",
    desc: "And wow... it's good at it. Let's call it a win and head elsewhere.",
  },
  {
    header: "Lost in the Void",
    desc: "This page might exist in another universe. Sadly, not this one.",
  },
  {
    header: "Reality Glitch Detected",
    desc: "You’ve slipped into the upside down. Let’s reroute before the Demogorgon shows up.",
  },
  {
    header: "The Page Has Ascended",
    desc: "It achieved enlightenment and left the website. Enlighten yourself by going back.",
  },
  {
    header: "Whoops. Wrong Timeline.",
    desc: "This version of reality doesn’t have that page. Try rewinding the multiverse.",
  },
  {
    header: "Content Not Found… But You Are!",
    desc: "The page is gone, but hey, at least you’re still here. Let’s find you a better spot.",
  },
  {
    header: "Oops! Misplaced the Map",
    desc: "We’re not lost, we’re just exploring… unintentionally. Let’s go back.",
  },
];

const PageNotFound = () => {
  const [message, setMessage] = useState(notFoundMessages[0]);

  useEffect(() => {
    const randomMessage =
      notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)];

    setMessage(randomMessage);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen text-secondary">
      <div className="bg-brand-faded text-brand p-7 rounded-full">
        <IconMapRoute size={100} strokeWidth={1} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-heading">{message.header}</h2>
        <p className="text-lg font-medium">{message.desc}</p>
      </div>
      <Link className="bg-primary text-dark px-4 py-2 rounded" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default PageNotFound;

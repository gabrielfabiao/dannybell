import React from "react";
import { futureEventsProps } from "@/types";

interface FutureEventsProps {
  block: futureEventsProps;
}

const FutureEvents = ({ block }: FutureEventsProps) => {
  const today = new Date();
  const eventDate = new Date(block.date!);

  if (eventDate <= today) {
    return null;
  }

  const formattedDate = eventDate.toLocaleDateString("en-GB");

  return (
    <li className="grid lg:grid-cols-3 gap-4 w-full rounded-xl mb-4 p-4 bg-[rgba(77,19,19,0.2)] shadow-md hover:shadow-lg transition-shadow duration-300">
      <p className="font-semibold text-lg text-[#4d1313] text-center">
        {block.title}
      </p>
      <p className="text-gray-700">{block.description}</p>
      <p className="text-gray-600 lg:text-right">{formattedDate}</p>
    </li>
  );
};

export default FutureEvents;

import React from 'react';

type TodaysMenuProps = {
  menu: Array<{ text: string; description: string }>;
  date: string;
  description: string;
};

const TodaysMenu = ({ menu, date, description }: TodaysMenuProps) => {

  console.log('TodaysMenu props:', { menu, date, description });

  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg max-w-md text-center'>
      <h2 className="text-2xl font-bold mb-2">Menu do dia {date}</h2>
      <ul className="list-disc pl-5">
        {menu.map((option, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{option.title}</span>
          </li>
        ))}
      </ul>
      <p className="mb-4 text-gray-700">{description}</p>
    </div>
  );
};

export default TodaysMenu;
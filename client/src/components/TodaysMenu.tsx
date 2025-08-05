import React from 'react';

type TodaysMenuProps = {
  menu: Array<{ text: string; description: string }>;
  date: string;
  description: string;
  price: number;
};

const TodaysMenu = ({ menu, date, description, price }: TodaysMenuProps) => {


  if (!menu || menu.length === 0) {
    return null;
  }

  return (
    <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 bg-[#842020] rounded-sm p-4 shadow-lg max-w-lg w-80 text-left justify-center border-4 border-[#4d1313] lg:right-0 lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2'>
      <h2 className="text-xl text-white">Menu do dia</h2>
      <p className="text-base mb-2 text-[#4d1313] font-normal">{date}</p>
      <ul className="list-disc">
        {menu.map((option, index) => (
          <li key={index} className="mb-2 list-none leading-tight text-white font-extralight">
            <span>{option.text}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-[#4d1313] font-normal">{description}</p>
      <div className='w-25 h-25 rounded-full absolute bg-[#9e3333] flex items-center justify-center top-0 -translate-y-1/2 right-0 translate-x-1/4 border-6 border-[#4d1313]'>
        <p className='text-3xl text-white tracking-wider'>{price}€</p>
      </div>
    </div>
  );
};

export default TodaysMenu; 
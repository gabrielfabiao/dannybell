import { pastEventsProps } from '@/types';

import Carousel from './Carousel';

interface PastEventsProps {
  block: pastEventsProps;
}

const PastEvents = ({ block }: PastEventsProps) => {

  return (
    <div className='rounded-xl mb-4 bg-[rgba(77,19,19,0.2)] shadow-md hover:shadow-lg transition-shadow duration-300'>
        <Carousel images={block.images} width='100%' height='auto' />
        <div className='p-4'>
          <p className='text-xl text-[#4d1313]'>{block.title}</p>
          <p className='mb-2'>{block.info}</p>
          <p>{block.description}</p>
          <p className='opacity-80 text-sm'>{block.date}</p>
        </div>
    </div>
  );
};


export default PastEvents
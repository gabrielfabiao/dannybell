import React from 'react'
import { futureEventsProps } from '@/types';

interface FutureEventsProps {
  block: futureEventsProps;
}

const FutureEvents = ({
    block
}: FutureEventsProps) => {

    const date = block.date
    const formattedPropDate = new Date(date!).toLocaleDateString('en-GB').slice(0, 10);

    return (
    <li className='grid lg:grid-cols-3 w-full h-fit border rounded-lg mb-4 items-center px-4 py-2'>
        <p className='font-bold'>{block.title}</p>
        <p>{block.description}</p>
        <p className='text-right'>{formattedPropDate}</p>
    </li>
  )
}

export default FutureEvents
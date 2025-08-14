import React from 'react'
import { EventsSectionProps, futureEventsProps } from '@/types'
import { li } from 'framer-motion/client'
import FutureEvents from '../FutureEvents'

const EventsSection = ({
    pastEvents,
    futureEvent,
    titlePast,
    titleFuture,
}: Readonly<EventsSectionProps>) => {

    console.log("past events:", pastEvents)
    console.log("future events", futureEvent)

  return (
    <section id="events-section" className='bg-[#ebddd3] pt-10 lg:pt-25 lg:px-10'>
      <h1
        className="relative text-4xl mx-auto w-fit mb-10 font-[garamond] text-[#4d1313] 
  before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313]
  after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
      >
        Eventos
      </h1>
      <div id='future-events'>
        <h1 className='font-black text-3xl'>{titleFuture}</h1>
          <ul className='px-2'>
            {futureEvent.map((block: futureEventsProps, index) => (
              <FutureEvents key={block.id ?? index} block={block} />
            ))}
          </ul>
      </div>
      <div id='past-events'></div>
    </section>
  )
}

export default EventsSection
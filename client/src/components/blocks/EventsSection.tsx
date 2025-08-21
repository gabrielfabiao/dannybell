import React from 'react'
import { EventsSectionProps, futureEventsProps, pastEventsProps } from '@/types'
import FutureEvents from '../FutureEvents'
import PastEvents from '../PastEvents'

const EventsSection = ({
    pastEvents,
    futureEvent,
    titlePast,
    titleFuture,
}: Readonly<EventsSectionProps>) => {


    console.log("past events:", pastEvents)
    console.log("future events", futureEvent)

  return (
    <section id="events-section" className='bg-[#ebddd3] pt-12 lg:px-10 mb-20'>
      <h1
        className="relative text-4xl mx-auto w-fit mb-4 font-[garamond] text-[#4d1313] 
  before:absolute before:top-0 before:left-0 before:w-full before:border-t before:border-[#4d1313]
  after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:border-[#4d1313]"
      >
        Eventos
      </h1>
      <div id='future-events'>
        <h1 className="text-center text-xl px-6 mb-10 text-[#4d1313] font-[500]">{titleFuture}</h1>
        <ul className='px-2'>
          {futureEvent.map((block: futureEventsProps, index) => (
            <FutureEvents key={block.id ?? index} block={block} />
          ))}
        </ul>
      </div>
      <div id='past-events' className='mt-20'>
        <h1 className="text-center text-xl px-6 mb-10 text-[#4d1313] font-[500]">{titlePast}</h1>
        <div className='lg:grid lg:grid-cols-4 lg:gap-4'>
          {pastEvents.map((block: pastEventsProps, index) => (
            <PastEvents key={block.id ?? index} block={block} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
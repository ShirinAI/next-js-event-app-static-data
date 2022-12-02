import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import {useRouter} from 'next/router'
import { Fragment } from 'react';


function AllEventsPage(){
  const router = useRouter();
  const events = getAllEvents();

  function findEvenetHandler(year, month){
    const fullPath = `/events/${year}/${month}`;
      router.push(fullPath);
  }

  return (
  <Fragment>
    <EventsSearch onSearch={findEvenetHandler}/>
    <EventList items={events}/>
    <h1>All Events</h1>
  </Fragment>
  )
}
export default AllEventsPage;
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list';
import EventSearch from '../components/events/events-search';

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
        <EventList items={featuredEvents}/>
    </div>
  )
}

export default Home;
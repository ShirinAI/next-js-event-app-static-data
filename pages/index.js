import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list';
import EventSearch from '../components/events/events-search';
import classes from './index.module.css'

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1 className={classes.title}>Featured Events</h1>
      <h2 className={classes.title}>Let us make you part of this.</h2>
        <EventList items={featuredEvents}/>
    </div>
  )
}

export default Home;
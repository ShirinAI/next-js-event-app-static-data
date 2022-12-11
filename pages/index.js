import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import classes from './index.module.css'

function Home(props) {
  return (
    <div>
      <h1 className={classes.title}>Featured Events</h1>
      <h2 className={classes.title}>Let us make you part of this.</h2>
        <EventList items={props.events}/>
    </div>
  )
}
export async function getStaticProps(){
  const featuredEvents = await getFeaturedEvents();
  return{
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}


export default Home;
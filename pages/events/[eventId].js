
import { Fragment } from 'react'
import { getEventById, getAllEvents, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'

function EventDetailPage(props) {

  const event = props.selectedEvent;

  if(!event){
    return <p>No Event Found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics 
        date={event.date} 
        address={event.location} 
        image={event.image} 
        imageAlt={event.title}/>
      <EventContent>
        {event.description}
      </EventContent>
    </Fragment>
 )
}

export async function getStaticProps(context){
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);
  return{
    props: {
      selectedEvent: event
    },
    revalidate: 900
  };
}

export async function getStaticPaths(){
  const events = await getFeaturedEvents();
  const paths = events.map(event => ( { params: { eventId: event.id } } ));
  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export default EventDetailPage
import Link from 'next/link'
import classes from './event-items.module.css'
import DateIcon from '../icons/date-icon';
import ArrowRightIcon from '../icons/arrow-right-icon'
import AddressIcon from '../icons/address-icon';

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    moth: 'long',
    year: 'numeric'
  });
  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
       <div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <DateIcon/>
          <time>{readableDate}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon/>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink} className={classes.btn}>
          <span>Explore Events</span>
          <span className={classes.icon}><ArrowRightIcon /></span>
        </Link>
      </div>
    </div>
    </li>
  )
}
export default EventItem;
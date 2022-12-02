import classes from './main-header.module.css';
import Link from 'next/link'

function MainHeader(){
return(
  <header className={classes.header}>
    <div className={classes.logo}>
      <Link href="/">Next-Events App</Link>
    </div>
    <nav >
      <ul>
        <li className={classes.li} >
          <Link className={classes.navigation} href="/events">All Events</Link>
        </li>
      </ul>
    </nav>
  </header>
)
}
export default MainHeader;
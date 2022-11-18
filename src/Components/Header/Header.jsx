import { Link } from 'react-router-dom'

import './header.css'

const nav_list1 = [
  {
    to: 'live',
    display: 'Live'
  },
  {
    to: 'push',
    display: 'Push'
  },
  {
    to: 'note',
    display: 'Note'
  },
  {
    to: 'link',
    display: 'Link'
  },
  {
    to: 'shop',
    display: 'Shop'
  },
  {
    to: 'pack',
    display: 'Pack'
  },
  {
    to: 'help',
    display: 'help'
  },
  {
    to: 'more',
    display: 'More'
  },
]

const Header = () => {
  return (
    <header className="nav">
      <div className="nav_logo">
        <Link className='list_link' to='/'>ME</Link>
      </div>

      <ul className="nav_list1">{
          nav_list1.map((item, index) => (
            <li class='nav_list_item' key={index}>
                <Link className='list_link' to={item.to}>{item.display}</Link>
            </li>
          ))
        }
      </ul>

      <ul  className="nav_list2">
          <li class='nav_list_item'>
              <Link className='list_link try-live' to='trylive'>Try Live for free</Link>
          </li>
          <li class='nav_list_item'>
              <Link className='list_link register-login' to='register'>Log in or Register</Link>
          </li>
      </ul>
    </header>
  )
}

export default Header

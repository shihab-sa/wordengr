import React from 'react'
import { Link } from 'react-scroll/modules'
// import Link from 'react-scroll/modules/components/Link'
import { BsFileWord} from 'react-icons/bs'
import './header.css'


const Header=()=>{
    return(
        <header>
           <div className='header__container container'>
              <div className='navigation__wrapper'>
                    <div><BsFileWord className='logo'/><span className='logo__name'>Engr</span></div>
                   <div className='nav__menu'>
                      <nav>
                          <ul>
                              <li>
                                  <Link to='home'>Home</Link>
                              </li>
                              <li>
                                  <Link to='services'>Services</Link>
                              </li>
                              <li>
                                  <Link to='about'>About</Link>
                              </li>
                              <li>
                                  <Link to='contact'>Contact</Link>
                              </li>
                          </ul>
                      </nav>

                   </div>
              </div>

           </div>
               
        </header>
    )
}

export default Header
import React from 'react';
import cl from './Navbar.module.css';

const Navbar = ()=> {
    return <nav className={cl.nav}>
      <div className={`${cl.item} ${cl.active}`}><a>Profile</a></div>
      <div className={`${cl.item} ${cl.active}`}><a>Massages</a></div>
      <div className={`${cl.item} ${cl.active}`}><a>News</a></div>
      <div className={`${cl.item} ${cl.active}`}><a>Music</a></div>
      <div className={`${cl.item} ${cl.active}`}><a>Settings</a></div>
      </nav>

}
export default Navbar;
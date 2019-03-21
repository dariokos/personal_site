import React from 'react'
import menuStyles from "./menu.module.css"

function Menu() {
  return (
    <div className={menuStyles.header}>
        <a className={menuStyles.logo} href="http://minimaldev.com">Site Title</a>
        
        <input id={menuStyles.nav} type="checkbox" />
        <label htmlFor={menuStyles.nav}></label>
        
        <nav className={menuStyles.nav}>
            <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a href="#">Four</a></li>
            </ul>
        </nav> 
    </div>
  )
}


export default Menu;
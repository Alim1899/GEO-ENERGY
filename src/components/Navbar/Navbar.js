import logo from '../../logo/logo.svg'
import classes from './Navbar.module.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
    <div className={classes.logo}>
    <img src={logo} alt='logo'></img>
    </div>
    <div className={classes.menu}>
        <ul className={classes.list}>
            <li className={classes.listItem}>სერვისები</li>
            <li className={classes.listItem}>ჩვენს შესახებ</li>
            <li className={classes.listItem}>გალერეა</li>
            <li className={classes.listItem}>კონტაქტი</li>
            <li className={classes.listItem}>პარტნიორი კომპანიები</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar
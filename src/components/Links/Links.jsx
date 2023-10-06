import React from 'react'
import { NavLink } from 'react-router-dom'
import './links.css'
function Links() {
    const links = [
        { url: '/search', text: 'All', isDisabled: false },
        { url: '/videos', text: 'Videos', isDisabled: false },
        { url: '/images', text: 'Images', isDisabled: true },
        { url: '/news', text: 'News', isDisabled: true },
    ]
  return (
    <div className='pt-5'>
        {links.map(({ url, text, isDisabled }, index) => (
            <NavLink key={index} to={url} className={({ isActive }) => isActive ? 'text-blue-700 border-b-2 border-blue-700 pb-2 dark:border-blue-300 dark:text-blue-300 mr-4' : `mr-4 ${isDisabled && 'disabled-link'}`} >
                {text}
            </NavLink>
        ))}
    </div>
  )
}

export default Links
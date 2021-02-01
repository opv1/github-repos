import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div className='navbar-brand'>GitHub Поиск</div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/github-repos/' exact>
          Главная
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/github-repos/about'>
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
)

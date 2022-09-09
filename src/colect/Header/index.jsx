import React from 'react'
import cls from './Header.module.scss'

const Header = () => {
  return (
    <React.Fragment>
      <div className={cls.container}>
        <ul className={cls.list}>
          <li>home</li>
          <li>servise</li>
          <li>favorite</li>
          <li>contacts</li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Header
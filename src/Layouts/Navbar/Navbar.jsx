import React from 'react'
import { ItemNavbar } from '../../Components/ItemNavbar'

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-row flex-wrap">
        <ItemNavbar
          myStyle="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
          contentItem="Home"
        />
        <ItemNavbar
          myStyle="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
          contentItem="Clase 1"
        />
        <ItemNavbar
          myStyle="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
          contentItem="Clase 2"
        />
      </ul>
    </nav>
  )
}

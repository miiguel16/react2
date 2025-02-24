import React from 'react'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <header className="bg-blue-400 w-full flex flex-row flex-wrap justify-center items-center h-26 pb-20">
            <h1 className="text-sky-100 font-extrabold text-2xl mt-2 p-8">Introduccion a React 2025</h1>
            <h1>sidjasodjasli</h1>
            <Navbar />
        </header>
    )
}
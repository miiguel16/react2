import React from 'react'
import { References } from '../References/References'

export const Footer = () => {
    return (
        <Footer className="flex flex-row flex-wrap bg-blue-400 w-full justify-center items-center h-26">

            <References
                styleReferencetyle="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
                contentReference="Instagram"
            />
            <References
                styleReference="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
                contentReference="Whatssap"
            />
            <References
                styleReference="grid place-content-evenly pr-6 text-zinc-50 hover:underline"
                contentReference="Facebook"
            />
        </Footer>
    )
}

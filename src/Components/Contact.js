import React from 'react'
import placeholder from "./images/placeholder.webp"

import './styles/main.css'
import './styles/contact.css'

function contact() {
    return (
        <main>
            <section>
                <img id="kontakt" src={ placeholder } alt="Lokalizacja restauracji" />
                    <h1>Lokalizacja restauracji</h1>
                    <h2>Telefon: +48 000 000 000</h2>
                    <h2>E-mail: kontakt@xyz.com</h2>
            </section>
        </main>
    )
}

export default contact
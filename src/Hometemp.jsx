import React from 'react'
import "./Home.css"
import Searchbar from './components/Searchbar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Delivery from './components/Delivery'
import Stories from './components/Stories'
import Higlight from './components/Higlight'
import Patners from './components/Patners'
import Footer from './components/Footer'

function Hometemp() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Delivery />

            <section id="search" class="brand-logos">
                <h1 class="sec-heading">Search News Post Here...</h1>
                <div>
                    <Searchbar />
                </div>
            </section>

            <Stories />
            <Higlight />
            <Patners />
            <Footer />
        </div>
    )
}

export default Hometemp

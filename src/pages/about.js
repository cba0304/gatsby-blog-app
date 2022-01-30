import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I'm learning Gatsby JS & React JS !!</p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Modi incidunt nostrum, ab, excepturi impedit vero sed, 
                dignissimos magnam voluptatum odit ullam ea sint deleniti praesentium. 
                Cumque, libero. Explicabo, eaque quasi.
            </p>
            <p>Need a developer? <Link to="/contact" >Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage
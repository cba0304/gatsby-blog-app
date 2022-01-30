import React from 'react'

import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <p>
            Follow me on:
            {/* target="_blank" makes the URl open on a new tab */}
                <a 
                    type="email" 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    >
                    Twitter
                </a> 
            </p>
        </Layout>
    )
}

export default ContactPage
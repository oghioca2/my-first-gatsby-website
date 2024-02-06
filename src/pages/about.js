// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Am creat acest site folosind Gatsby.</p>
        </Layout>
    )
}

// Step 5: Add a page title using Gatsby Head API / using metadata
export const Head = () => <title>About Me</title>

// Step 4: Export your component
export default AboutPage
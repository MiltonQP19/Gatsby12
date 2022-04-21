import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"


const About = () => (

    <Layout>
        <Seo title="About" />
        <h1>About Page</h1>
        <Link to="/">Back to Home</Link>
    </Layout>

)

export default About
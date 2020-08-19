import React from "react"
import {Link} from "gatsby"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"


const ComponentName = ({ data: {client: {data: {Titre_Article, Body, image_détail}}} }) => {
    return (<div>
        <Layout>
            <div>
                <SEO title="Page client"/>
                <h1>Client</h1>
                        <p>{Titre_Article}</p>
                        <img>{image_détail}</img>
                        <p>{Body}</p>


            </div>
                <p><Link to="/page-2/">Go back to Site web</Link></p>

                <p><Link to="/">Go back to the homepage</Link></p>
        </Layout>
    </div>
    )
}

export const query = graphql`
    query GetSingleClient($slug: String) {
        client: airtable(data: {slug: {eq: $slug}}) {
            id
            data {
               Titre_Article
               Body
            }
        }
    }
`

export default ComponentName
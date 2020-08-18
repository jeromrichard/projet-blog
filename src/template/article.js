import React from "react"
import {Link} from "gatsby"
import {graphql} from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
    query GetSingleBlogposts($slug: String) {
        article: airtable(data: {slug: {eq: $slug}}) {
            id
            data {
                Titre_Article
                Body
            }
        }
    }
`

const ComponentName = ({ data: {article: {data: {Titre_Article, Body}}} }) => {
    return <div>
        <Layout>
            <div>
                <SEO title="Page article"/>
                <h1>Article</h1>
                       
                        <p>{Titre_Article}</p>
                        
                        <p>{Body}</p>

            </div>
            <p><Link to="/page-2/">Site web</Link></p>

            <p><Link to="/">Go back to the homepage</Link></p>
        </Layout>
    </div>
}

export default ComponentName
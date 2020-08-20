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
               
                        <h1 style={{color: `red`}}>{Titre_Article}</h1>

                        <Img
                            fluid={image_détail}
                            alt=""
                            style={{ border: "2px solid rebeccapurple", borderRadius: 5, height: 250 }}
                        />
                        
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
                img{
                    image_détail
                }
            }
        }
    }
`

export default ComponentName
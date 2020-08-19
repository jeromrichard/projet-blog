import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"
import Layout from "../components/layout"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allAirtable(
        filter: { table: { eq: "Blogposts" } }
        sort: { fields: data___Titre_Article, order: DESC }
      ) {
        nodes {
          data {
           Titre_Article
            Intro  
            slug
          }
          recordId
        }
      }
    }
  `);

  return (
    <div>
      <layout>
        <div>
          <h3>Blogposts</h3>
            <table>
                    <thead>
                      <tr>
                            <th>Titre article</th>
                            <th>Intro</th>
                      </tr>
                    </thead>
                      <tbody>
                        {data.allAirtable.nodes.map((item, i) => (
                          <tr key={item.recordId}>
                            <td><Link to={`/Article/${item.data.slug}`}>{item.data.Titre_Article}</Link></td>
                            <td>{item.data.Intro}</td>                          
                          </tr>
                         ))}
                      </tbody>
            </table>
        </div>
        <Link to="/">Accueil</Link> <br />
      </layout>
    </div>
  );
};

export default Menu;
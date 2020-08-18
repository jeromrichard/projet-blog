const path = require('path');

// Create pages dynamically

exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const result = await graphql(`
    query getBlogposts {
          articles:allAirtable(filter: {table: {eq: "Blogposts"}}) {
            nodes {
              data {
                slug
              }
            }
          }
        }
    `)
    result.data.articles.nodes.forEach((article)=> {
        createPage({
            path:`/article/${article.data.slug}`,    
            component: path.resolve(`src/template/article.js`),
            context: {
                slug: article.data.slug
            }
        })
    })
}
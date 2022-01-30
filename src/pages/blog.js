import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'

// Components
import Layout from "../components/layout"

// CSS
import * as blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
        `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className= {blogStyles.posts} >
                {data.allMarkdownRemark.edges.map((edge, id) => {
                    return (
                        <li className= {blogStyles.post}  key= { id.toString() } >
                            <Link to= {`/blog/${ edge.node.fields.slug }`} >
                            <h2> { edge.node.frontmatter.title } </h2>
                            <p> { edge.node.frontmatter.date } </p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
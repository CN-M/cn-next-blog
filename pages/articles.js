import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import { sortByDate } from '../utils'

const articles = ({ posts }) => {
  return (
    <>
    <h2>Latest Article:
        <Link key={0} href={`/articles/${posts[0].slug}`}>
        <a> {posts[0].frontmatter.title}</a>
        </Link>
    </h2>

    <hr />
    <h2>Articles:</h2>
    <ul className="list">
        {posts.map((post, index) => (
            <li key={index}>
                <Link href={`/articles/${post.slug}`}>
                    <a>{post.frontmatter.title}</a>
                </Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export const getStaticProps = async () => {
    // Get files from post dir
    const files = fs.readdirSync(path.join('posts'))
  
    // Get Slug + front matter from posts
    const posts = files.map(filename => {
      const slug = filename.replace('.md', '')
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data:frontmatter} = matter(markdownWithMeta)
  
      return {
        slug,
        frontmatter
      }
    })    
  
    return {
      props: {
        posts: posts.sort(sortByDate),
      }
    } 
  }


export default articles
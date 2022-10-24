import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import Meta from '../components/Meta'
import mainStyles from '../styles/Main.module.scss'
import { sortByDate } from '../utils'

const articles = ({ posts, articles, short_stories }) => {
  return (
    <>
      <Meta title='Articles | C.N.M' />
    <h2>Latest Piece:
      {
      posts[0].frontmatter.category === 'Article' ? 
      (
      <Link key={0} href={`/articles/${posts[0].slug}`}>
          <a> {posts[0].frontmatter.title}</a>
      </Link>
      )
      :
      (
      <Link key={0} href={`/short-stories/${posts[0].slug}`}>
        <a> {posts[0].frontmatter.title}</a>
      </Link>
      )
      }
    </h2>

    <hr />
    <div className={mainStyles.pieces}>
      <div className={mainStyles.articles}>
        <h2>Articles:</h2>
        <ul className={mainStyles.list}>
            {articles.map((article, index) => (
                <li key={index}>
                    <Link href={`/articles/${article.slug}`}>
                        <a>{article.frontmatter.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
      <br/>
      <div className={mainStyles.short_stories}>
        <h2>Short Stories:</h2>
        <ul className={mainStyles.list}>
            {short_stories.map((story, index) => (
                <li key={index}>
                    <Link href={`/short-stories/${story.slug}`}>
                        <a>{story.frontmatter.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
      </div>
    </div>
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

    const articles = []
    const short_stories = []
  
    posts.forEach(post => {
      if (post.frontmatter.category === 'Short Story') {
        short_stories.push(post)
      } else if (post.frontmatter.category === 'Article') {
        articles.push(post)
      }
    })
  
    return {
      props: {
        posts: posts.sort(sortByDate),
        articles: articles.sort(sortByDate),
        short_stories: short_stories.sort(sortByDate)
      }
    } 
  }


export default articles
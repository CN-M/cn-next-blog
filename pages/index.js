import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import Meta from '../components/Meta'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <>
      <Meta title='Home | C.N.M' />
      <h1>Hey, Welcome to the blog</h1>
      <br />

      <h2>My name is C.N.</h2>
      <h2>I&apos;m a software engineer and writer.</h2>
      <br />

      <h2>I&apos;m also a bit of an idiot.</h2>
      <h2>I have this tendency of overthinking things and</h2>
      <h2>making them needlessly complicated.</h2>
      <br />

      <h2>Writing helps me think things through in a far less convoluted way.</h2>

      <hr />
      <h2>Read my latest work: 
        <Link key={0} href={`/articles/${posts[0].slug}`}>
          <a> {posts[0].frontmatter.title}</a>
        </Link>
      </h2>
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
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import { sortByDate } from '../utils'

const about = ({ posts }) => {
  return (
    <>
        <h1>Hey</h1>
        <br />

        <h2>My name is C.N.</h2>
        <h2>I write sometimes.</h2>
        <br />
        <h2>Yep.</h2>
        <h2>That&apos;s about it.</h2>

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

export default about

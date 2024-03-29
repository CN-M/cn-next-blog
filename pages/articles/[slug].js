import fs from 'fs'
import path from 'path'
import Meta from '../../components/Meta'
import matter from 'gray-matter'
import { marked } from 'marked'
import Post from '../../components/Post'
import postStyles from '../../styles/Post.module.scss'

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
      params: {
          slug: filename.replace('.md', '')
      }
  }))

  return {
      paths,
      fallback: false,

  }
}

export const getStaticProps = async ({params: { slug }}) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
      props: {
          frontmatter,
          slug,
          content
      }
  }
}

const singlePost = ({ frontmatter: {title, date}, slug, content }) => {
  return (
    <Post>
      <Meta title={title + ' | C.N.M.'} />
      <h1>{title}</h1>
      <hr />
      <h3 className={postStyles.date}>{date}</h3>
      <br />
      <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
    </Post>
  )
}


export default singlePost
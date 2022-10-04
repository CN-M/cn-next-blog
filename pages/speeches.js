import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from "next/link"
import Meta from '../components/Meta'
import mainStyles from '../styles/Main.module.scss'
import { sortByDate } from '../utils'

const speeches = ({ speeches }) => {
  return (
    <>
      <Meta title='Speeches | C.N.M' />
      <h3>A few speeches that I&apos;ve come across in my lifetime</h3>
    <h2>Latest Article:
        <Link key={0} href={`/speeches/${speeches[0].slug}`}>
        <a> {speeches[0].frontmatter.title}</a>
        </Link>
    </h2>

    <hr />
    <h2>Articles:</h2>
    <ul className={mainStyles.list}>
        {speeches.map((speech, index) => (
            <li key={index}>
                <Link href={`/speeches/${speech.slug}`}>
                    <a>{speech.frontmatter.title}</a>
                </Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export const getStaticProps = async () => {
    // Get files from speech dir
    const files = fs.readdirSync(path.join('speeches'))
  
    // Get Slug + front matter from speeches
    const speeches = files.map(filename => {
      const slug = filename.replace('.md', '')
      const markdownWithMeta = fs.readFileSync(path.join('speeches', filename), 'utf-8')
      const { data:frontmatter} = matter(markdownWithMeta)
  
      return {
        slug,
        frontmatter
      }
    })    
  
    return {
      props: {
        speeches: speeches.sort(sortByDate),
      }
    } 
  }


export default speeches
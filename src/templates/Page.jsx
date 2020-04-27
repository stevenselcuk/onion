import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import styles from './Page.module.css'
import SEO from '../components/atoms/SEO'

const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: 'tomato' }} {...props} />
}

const PageTemplate = (props) => {
  console.log(props)
  return (
    <>
      <SEO
        title={props.pageContext.frontmatter.title}
        description={props.pageContext.frontmatter.description}
      />
      <MDXProvider components={components}>
        <div {...props} className={styles.mdx}>
          {props.children}
        </div>
      </MDXProvider>
    </>
  )
}

export default PageTemplate

import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Meta {
    metaYaml {
      description
      bugs
      repo
      img {
        childImageSharp {
          resize(width: 980) {
            src
          }
        }
      }
      productImg {
        childImageSharp {
          resize(width: 980) {
            src
          }
        }
      }
      availability {
        status
        available
        unavailable
      }
    }
  }
`

export const useMeta = () => {
  const { metaYaml } = useStaticQuery(query)
  return metaYaml
}

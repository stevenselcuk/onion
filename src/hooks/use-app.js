import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query App {
    contentJson {
      basics {
        name
        label
        storeUrl
        email
        website
        summary
        profiles {
          network
          url
          username
        }
        location {
          city
          countryCode
        }
      }
    }
  }
`

export const useApp = () => {
  const { contentJson } = useStaticQuery(query)
  return contentJson
}

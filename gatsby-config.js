const path = require('path')
const fs = require('fs')
const yaml = require('js-yaml')
const meta = yaml.load(fs.readFileSync('./content/meta.yml', 'utf8'))
const app = require('./content/app.json')
// const { matomoSite, matomoUrl } = meta[0]
const { name, website } = app.basics

require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `${website}`
  },
  plugins: [
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-transformer-json'
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/Page.jsx')
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: name.toLowerCase(),
        short_name: 'mk',
        start_url: '/',
        background_color: '#e7eef4',
        theme_color: '#e7eef4',
        icon: 'src/images/favicon.png',
        display: 'standalone',
        cache_busting_mode: 'name',
        theme_color_in_head: false // dynamically set in ThemeSwitch
      }
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
        classNameLight: 'light',
        minify: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-webpack-size'
    // 'gatsby-plugin-webpack-bundle-analyser-v2'
  ]
}

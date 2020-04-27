/* eslint-disable no-console */

const path = require('path')
const remark = require('remark')
const parse = require('remark-parse')
const html = require('remark-html')
const axios = require('axios')
const fs = require('fs')
const yaml = require('js-yaml')
const chalk = require('chalk')

function truncate(n, useWordBoundary) {
  if (this.length <= n) {
    return this
  }
  const subString = this.substr(0, n - 1)
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + '...'
  )
}

exports.onPreBootstrap = async () => {
  try {
    console.log(chalk.green('success ') + 'Running')
  } catch (error) {
    throw Error(error.message)
  }
}

//
// Add repos to front page's context
//
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === '/')
    createPage({
      ...page,
      context: {
        ...page.context
      }
    })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  actions,
  stage,
  rules,
  plugins,
  loaders
}) => {
  const sassRuleModules = {
    test: /\.module\.s(a|c)ss$/,
    use: [
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'src/styles/_media.scss',
            'src/styles/_layout.scss',
            'src/styles/_typography.scss'
          ]
        }
      }
    ]
  }

  actions.setWebpackConfig({
    module: {
      rules: [sassRuleModules]
    }
  })
}

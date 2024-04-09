const path = require(`path`);

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });

  const recipesResult = await graphql(`
    {
      allRecipesJson (filter:{internal_id:{lt: 200}}) {
        nodes {
          id
          internal_id
          recipe_name
          prep_time
          cook_time
          total_time
          servings
          ingredients
          directions
          rating
          url
          cuisine_path
          nutrition
          timing
          img_src
        }
      }
    }
  `);

  recipesResult.data.allRecipesJson.nodes.forEach((node) => {
    createPage({
      path: `/recipes/${node.internal_id}`,
      component: path.resolve(`./src/templates/recipesPage.js`),
      context: {
        node
      },
    });
  });
}

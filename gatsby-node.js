exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            title
            content {
              raw
            }
            contentful_id
          }
        }
      }
    }
  `);
  console.log(result);
  const data = result.data.allContentfulBlogPost.edges;
  data.map((data) => {
    createPage({
      path: data.node.title,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        data: data.node,
      },
    });
  });
};

exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: "my-dynamic-page",
    component: require.resolve(`./src/templates/dynamic-page.js`),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      name: "gatsby nodejs file",
    },
  });
  console.log("End of Gatsby Node File");
};

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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql`
    query MyQuery {
      allContentfulBlogPost {
        nodes {
          title
          content {
            raw
          }
        }
      }
    }
  `;

  const data = result.data.allContentfulBlogPost.nodes;
  data.map((details) => {
    createPage({
      path: "blogs",
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        data: details.title,
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

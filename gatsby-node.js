const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query MyQuery {
      allContentfulBlogPost {
        edges {
          node {
            title
            slug
            id
            publicationDate(formatString: "DD-MM-YYYY")
            excerpt {
              excerpt
            }
            body {
              raw
            }
            description {
              description
            }
            featuredImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);
  response.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        data: edge.node,
      },
    });
  });
};

const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// To add the slug filed to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages',
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD[,] YYYY", locale: "en-us")
            category
            background
            image
          }
          timeToRead
          fields {
            slug
          }
        }
        next {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }

  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;
    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug,
          previousPost: previous,
          nextPost: next,
        },
      });
    });
    const postPerPage = 6;
    const numPages = Math.ceil(posts.length / postPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? '/' : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postPerPage,
          skip: index * postPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};

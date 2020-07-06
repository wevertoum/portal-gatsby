import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ path, alt }) => (
  <StaticQuery
    query={graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(path));
      if (!image) {
        return null;
      }

      return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />;
    }}
  />
)

Image.propTypes = {
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Image

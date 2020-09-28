// @flow strict
import { useStaticQuery, graphql } from '../components/Sidebar/Author/node_modules/gatsby';

const useCategoriesList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  return allMarkdownRemark.group;
};

export default useCategoriesList;

import gql from 'graphql-tag';
import createClient from '../../apolloClient';
import Fragment from '../Fragment';

const { USER } = Fragment;

const ME = gql`
  query me {
    me {
      ...${USER}
    }
  }
`;

const fetchMe = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.query({
      query: ME,
      variables,
    });
    return result?.data?.me;
  } catch (error) {
    throw error;
  }
};
export default fetchMe;

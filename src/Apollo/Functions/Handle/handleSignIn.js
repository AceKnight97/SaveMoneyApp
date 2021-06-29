import gql from 'graphql-tag';
import {client} from '../../apolloClient';
import Fragment from '../Fragment';

const {USER} = Fragment;

const SIGN_IN = gql`
mutation signIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    token
    isSuccess
    user {
      ...${USER}
    }
  }
}
`;

const handleSignIn = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: SIGN_IN,
      variables,
    });
    return result?.data?.signIn;
  } catch (error) {
    throw error;
  }
};
export default handleSignIn;

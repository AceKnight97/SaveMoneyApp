import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const SIGN_UP = gql`
mutation signUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password) {
    token
    isSuccess
  }
}
`;

const handleSignUp = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: SIGN_UP,
      variables,
    });
    const { signUp } = result?.data;
    if (!signUp?.isSuccess) throw signUp.message;
  } catch (error) {
    throw error;
  }
};

export default handleSignUp;

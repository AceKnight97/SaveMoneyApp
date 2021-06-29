import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const FORGOT_PASSWORD = gql`
mutation forgotPassword($email: String!) {
  forgotPassword(email: $email) {
    isSuccess
    message
  }
}
`;

const handleForgotPassword = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: FORGOT_PASSWORD,
      variables,
    });
    const { forgotPassword } = result?.data;
    if (!forgotPassword?.isSuccess) throw forgotPassword.message;
  } catch (error) {
    throw error;
  }
};
export default handleForgotPassword;

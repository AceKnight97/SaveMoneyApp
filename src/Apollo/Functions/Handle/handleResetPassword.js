import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const RESET_PASSWORD = gql`
mutation resetPassword($verificationCode: String!, $password: String!) {
  resetPassword(verificationCode: $verificationCode, password: $password) {
    token
    isSuccess
    message
  }
}
`;

const handleResetPassword = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: RESET_PASSWORD,
      variables,
    });
    const { resetPassword } = result?.data;
    if (!resetPassword?.isSuccess) throw resetPassword.message;
  } catch (error) {
    throw error;
  }
};
export default handleResetPassword;

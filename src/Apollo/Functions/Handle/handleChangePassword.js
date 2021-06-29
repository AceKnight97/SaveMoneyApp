import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const CHANGE_PASSWORD = gql`
mutation changePassword($password: String!, $newPassword: String!) {
  changePassword(password: $password, newPassword: $newPassword) {
    token
    isSuccess
    message
  }
}
`;

const handleChangePassword = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: CHANGE_PASSWORD,
      variables,
    });
    const { changePassword } = result?.data;
    if (!changePassword?.isSuccess) throw changePassword.message;
  } catch (error) {
    throw error;
  }
};
export default handleChangePassword;

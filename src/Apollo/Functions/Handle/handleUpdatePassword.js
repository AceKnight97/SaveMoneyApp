import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const UPDATE_PASSWORD = gql`
mutation updatePassword($input: UpdatePasswordInput!) {
  updatePassword(input: $input) {
    isSuccess
    message
  }
}
`;

const handleUpdatePassword = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: UPDATE_PASSWORD,
      variables,
    });
    const { updatePassword } = result?.data;
    if (!updatePassword?.isSuccess) throw updatePassword.message;
  } catch (error) {
    throw error;
  }
};
export default handleUpdatePassword;

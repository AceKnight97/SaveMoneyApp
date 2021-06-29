import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const UPDATE_USER = gql`
mutation updateUser($profileInput: ProfileInput!) {
  updateUser(profileInput: $profileInput) {
    isSuccess
    message
  }
}
`;

const handleUpdateUser = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: UPDATE_USER,
      variables,
    });
    const { updateUser } = result?.data;
    if (!updateUser?.isSuccess) throw updateUser.message;
  } catch (error) {
    throw error;
  }
};

export default handleUpdateUser;

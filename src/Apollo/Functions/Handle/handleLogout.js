import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const LOGOUT = gql`
mutation logout {
  logout {
    isSuccess
    message
  }
}
`;

const handleLogout = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: LOGOUT,
      variables,
    });
    const { logout } = result?.data || {};
    if (!logout?.isSuccess) throw logout.message;
  } catch (error) {
    throw error;
  }
};
export default handleLogout;

import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const UPDATE_LOGS = gql`
mutation updateLogs($input: UpdateLogsInput!) {
  updateLogs(input: $input) {
    isSuccess
    message
  }
}
`;

const handleUpdateLogs = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: UPDATE_LOGS,
      variables,
    });
    const { updateLogs } = result?.data;
    if (!updateLogs?.isSuccess) {
      throw updateLogs.message;
    }
  } catch (error) {
    throw error;
  }
};

export default handleUpdateLogs;

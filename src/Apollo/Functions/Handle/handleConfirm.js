import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const CONFIRM = gql`
mutation confirm($input: ConfirmUserInput!) {
  confirm(input: $input) {
    isSuccess
    message
  }
}
`;

const handleConfirm = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: CONFIRM,
      variables,
    });
    const { confirm } = result?.data;
    if (!confirm?.isSuccess) throw confirm.message;
  } catch (error) {
    throw error;
  }
};
export default handleConfirm;

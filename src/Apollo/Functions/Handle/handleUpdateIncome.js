import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const UPDATE_INCOME = gql`
mutation updateIncome($input: UpdateIncomeInput!) {
  updateIncome(input: $input) {
    isSuccess
    message
  }
}
`;

const handleUpdateIncome = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: UPDATE_INCOME,
      variables,
    });
    const { updateIncome } = result?.data;
    if (!updateIncome?.isSuccess) {
      throw updateIncome.message;
    }
  } catch (error) {
    throw error;
  }
};

export default handleUpdateIncome;

import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const ADD_DAILY_INFO = gql`
mutation addDailyInfo($input: AddDailyInput!) {
  addDailyInfo(input: $input) {
    isSuccess
    message
  }
}
`;

const handleAddDailyInfo = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: ADD_DAILY_INFO,
      variables,
    });
    const { addDailyInfo } = result?.data;
    if (!addDailyInfo?.isSuccess) {
      throw addDailyInfo.message;
    }
  } catch (error) {
    throw error;
  }
};

export default handleAddDailyInfo;

import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const UPDATE_DAILY_INPUT = gql`
  query updateDailyInfo($dailyInput: DailyInput!) {
    updateDailyInfo(dailyInput: $dailyInput) {
      isSuccess
      message
    }
  }
`;

// const dailyInput = {
//   id: ID,
//   date: Date!,
//   logs: {
//     title: String,
//     money: String,
//     details: String,
//   },
//   income: String,
//   notes: String,
// };

const fetchUpdateDailyInput = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: UPDATE_DAILY_INPUT,
      variables,
    });
    const { updateDailyInfo } = result?.data;
    if (!updateDailyInfo?.isSuccess) throw updateDailyInfo.message;
  } catch (error) {
    throw error;
  }
};
export default fetchUpdateDailyInput;

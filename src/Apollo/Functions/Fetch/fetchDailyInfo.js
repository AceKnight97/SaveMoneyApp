import gql from 'graphql-tag';
import createClient from '../../apolloClient';
import Fragment from '../Fragment';

const { SPENDING_RESPONSE } = Fragment;

const DAILY_INPUT = gql`
  query dailyInfo($date: String!) {
    dailyInfo(date: $date) {
      ...${SPENDING_RESPONSE}
    }
  }
`;

// logs = []

const fetchDailyInfo = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.query({
      query: DAILY_INPUT,
      variables,
    });
    const { dailyInfo } = result?.data;
    return dailyInfo;
  } catch (error) {
    throw error;
  }
};
export default fetchDailyInfo;

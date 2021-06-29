import gql from 'graphql-tag';
import createClient from '../../apolloClient';
import Fragment from '../Fragment';

const { SPENDING_RESPONSE } = Fragment;

const INSIGHT = gql`
  query insight($from: String!, $to: String!) {
    insight(from: $from, to: $to) {
     ...${SPENDING_RESPONSE}
    }
  }
`;

// const InsightDataInput = {
//   from: Date,
//   to: Date,
// };
// dailyInfo = []

const fetchInsight = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.query({
      query: INSIGHT,
      variables,
    });
    const { insight } = result?.data;
    return insight;
  } catch (error) {
    throw error;
  }
};
export default fetchInsight;

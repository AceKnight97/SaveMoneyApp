import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const MASTER_DATA = gql`
  query masterData(date: $Date) {
    masterData(date: $date) {
      profile {
        id
        avatar
        email
        username
        status
        role
        gender
        address
        phone
        birth
      }
      dailyInfo {
        id
        date
        logs {
          title
          money
          details
        }
        income
        notes
      }
    }
  }
`;

const fetchMasterData = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.query({
      query: MASTER_DATA,
      variables,
    });
    const { masterData } = result?.data;
    return masterData;
  } catch (error) {
    throw error;
  }
};
export default fetchMasterData;

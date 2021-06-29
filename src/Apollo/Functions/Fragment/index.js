import gql from 'graphql-tag';

const USER = gql`
 {
    id
    email
    username
    role
    status
    gender
    address
    phone
    dob
    isVerified
    signUpDate
    firstDate
    totalSpending
    totalIncome
    moneyLeft
  }
`;

const LOG = gql`
{
  title
  money
  details
}
`;

const SPENDING_RESPONSE = gql`
{
  id
  date
  logs {
    ...${LOG}
  }
  income
  notes
}
`;

export default { USER, LOG, SPENDING_RESPONSE };

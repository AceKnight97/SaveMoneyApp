import gql from 'graphql-tag';
import createClient from '../../apolloClient';

const VERIFIED_EMAIL = gql`
mutation verifiedEmail($verificationCode: String!) {
  verifiedEmail(verificationCode: $verificationCode) {
    isSuccess
    message
  }
}
`;

const handleVerifiedEmail = async (variables) => {
  const client = await createClient();
  try {
    const result = await client.mutate({
      mutation: VERIFIED_EMAIL,
      variables,
    });
    const { verifiedEmail } = result?.data;
    if (!verifiedEmail?.isSuccess) {
      throw verifiedEmail.message;
    }
  } catch (error) {
    throw error;
  }
};

export default handleVerifiedEmail;

import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const RESEND_VERIFICATION_CODE = gql`
mutation resendVerificationCode($input: ResendForgotPasswordCodeInput!) {
  resendVerificationCode(input: $input) {
    isSuccess
    message
  }
}
`;

const handleResendVerificationCode = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: RESEND_VERIFICATION_CODE,
      variables,
    });
    const { resendVerificationCode } = result?.data;
    if (!resendVerificationCode?.isSuccess) throw resendVerificationCode.message;
  } catch (error) {
    throw error;
  }
};
export default handleResendVerificationCode;

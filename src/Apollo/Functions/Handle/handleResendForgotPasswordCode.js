import gql from 'graphql-tag';
import { client } from '../../apolloClient';

const RESEND_FORGOT_PASSWORD_CODE = gql`
mutation resendForgotPasswordCode($input: ResendForgotPasswordCodeInput!) {
  resendForgotPasswordCode(input: $input) {
    isSuccess
    message
  }
}
`;

const handleResendForgotPasswordCode = async (variables) => {
  try {
    const result = await client.mutate({
      mutation: RESEND_FORGOT_PASSWORD_CODE,
      variables,
    });
    const { resendForgotPasswordCode } = result?.data;
    if (!resendForgotPasswordCode?.isSuccess) throw resendForgotPasswordCode.message;
  } catch (error) {
    throw error;
  }
};
export default handleResendForgotPasswordCode;

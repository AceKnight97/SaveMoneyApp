import {createStackNavigator} from 'react-navigation-stack';
import DoneLogin from '../../Login/doneLogin';
import ForgotPassword from '../../Login/ForgotPassword';
// import TheFirstPage from '../Login/TheFirstPage/theFirstPage';
import SignIn from '../../Login/SignIn';
import SignUp from '../../Login/SignUp';
import VerifyCode from '../../Login/VerifyCode';


const SignInStack = createStackNavigator(
    {
      SignIn: {screen: SignIn},
      SignUp: {screen: SignUp},
      VerifyCode: {screen: VerifyCode},
      ForgotPassword: {screen: ForgotPassword},
      DoneLogin: {screen: DoneLogin},
    },
    {
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
    {
      initialRouteName: 'SignIn',
    },
);

export default SignInStack;

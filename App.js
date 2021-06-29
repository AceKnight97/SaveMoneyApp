import {ApolloProvider} from '@apollo/client';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import React from 'react';
import {AppRegistry, Platform, SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux';
import {sessionService} from 'redux-react-session';
import {client} from './src/Apollo/apolloClient';
import AppNavigator from './src/Navigation';
import configureStore from './src/Redux/Store';

const AppContainer = createAppContainer(AppNavigator);
const store = configureStore();
sessionService.initSessionService(store);

const App = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop: Platform.OS === 'ios' ? 20 : 0,
            }}>
            <AppContainer />
          </SafeAreaView>
        </ApplicationProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
AppRegistry.registerComponent('albums', () => App);

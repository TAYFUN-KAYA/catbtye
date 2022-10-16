/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Text} from 'react-native';
import {DetailProvider} from './src/context/DetailCtx';
import Homepage from './src/pages/Homepage';
import {Provider as ReduxProvider} from 'react-redux';
import STORE from './src/store';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView>
          <ReduxProvider store={STORE}>
            <DetailProvider>
              <Homepage />
            </DetailProvider>
          </ReduxProvider>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

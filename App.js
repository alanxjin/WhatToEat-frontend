import React, { Component } from 'react';
import EntryNavigator from './app/Navigators/EntryNavigator'
import AppContainer from './app/AppContainer'

export default class App extends Component<{}> {
  render() {
    return (
      <EntryNavigator />
    );
  }
}

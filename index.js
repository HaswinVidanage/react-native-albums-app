// Import a library to help create a component
import React from 'react';
import {AppRegistry, View}  from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// attempt to create a document
const App = () => {
  return (
    <View>
      <Header headerText={'HEADER1'}/>
      <AlbumList/>
    </View>
  )
};
// render it to the device
AppRegistry.registerComponent('albums', () => App);

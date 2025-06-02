/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StatusBar, useColorScheme, StyleSheet } from 'react-native';
import { Chessboard } from 'react-native-chessboard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#222' : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Chessboard size={350} />
    </View>
  );
}

export default App;

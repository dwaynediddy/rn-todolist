import React from 'react';
import { ThemeProvider} from './Theme'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native'

import ToDoScreen from './src/screens/ToDoScreen'



const App = () => {


  return (
    <ThemeProvider>
          <ToDoScreen />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;

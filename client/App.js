import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button 
} from 'react-native';

export default function App() {

  function handlePress (message) {
    console.log(message)
  }
  return (
    <View style={styles.container}>
      <Button
        title="Press Me"
        onPress={() => handlePress("submit")} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

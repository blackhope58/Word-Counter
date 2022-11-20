import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={styles.text_simple}>Simple</Text>
      <Text style={styles.text_word}>WORD</Text>
      <Text style={styles.text_counter}>COUNTER</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CounterPage');
        }}>
        <Text style={styles.text_button}>Count</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#180447',
  },
  text_word: {
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: -15,
  },
  text_counter: {
    fontSize: 65,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  text_simple: {
    fontSize: 23,
    fontWeight: '300',
    color: 'white',
    marginLeft: -200,
    marginBottom: -25,
    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },
  button: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
    marginTop: 50,
  },
  text_button: {
    color: 'black',
    fontWeight: '500',
    fontSize: 35,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [text, onChangeText] = useState(' ');

  const [charactersCount, setCharactersCount] = useState('0');
  const [wordsCount, setWordsCount] = useState('0');
  const [lenghtCount, setLenghtCount] = useState('0');

  function splitText() {
    if (text === ' ') {
      setCharactersCount('0');
      setWordsCount('0');
      setLenghtCount('0');
    } else {
      const wordsCounter = text.split(' ');
      setWordsCount(wordsCounter.length);

      setLenghtCount(text.length);

      setCharactersCount(text.length + wordsCounter.length - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          multiline
          placeholder="Text"
          focusable
          placeholderTextColor={'#858585'}
        />
      </View>
      <View style={styles.counter_container}>
        <View style={styles.characters_container}>
          <Text style={styles.text_counter_header}>Characters</Text>
          <Text style={styles.text_characters_count}>{charactersCount}</Text>
        </View>
        <View style={styles.characters_container}>
          <Text style={styles.text_counter_header}>Words</Text>
          <Text style={styles.text_characters_count}>{wordsCount}</Text>
        </View>
        <View style={styles.characters_container}>
          <Text style={styles.text_counter_header}>Lenght</Text>
          <Text style={styles.text_characters_count}>{lenghtCount}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.count_button} onPress={splitText}>
        <Text style={styles.text_count}>Count!</Text>
      </TouchableOpacity>
    </View>
  );
};

let winWidth = Dimensions.get('window').width;
let winHeight = Dimensions.get('window').height;

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#180447',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text_container: {
    width: winWidth / 1.14,
    height: winHeight / 1.4,
    backgroundColor: '#0f0331',
    borderRadius: 25,
    padding: 10,
  },
  counter_container: {
    flexDirection: 'row',
  },
  characters_container: {
    backgroundColor: '#0f0331',
    width: winWidth / 3.6,
    height: winHeight / 11,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text_counter_header: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 5,
    color: 'white',
  },
  text_characters_count: {
    fontSize: 17,
    fontWeight: '300',
    color: 'white',
  },
  count_button: {
    backgroundColor: '#0f0331',
    width: winWidth / 1.6,
    height: winHeight / 12.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 0.7,
    borderColor: 'white',
  },
  text_count: {
    fontSize: 45,
    fontWeight: '500',
    color: 'white',
  },
  textInput: {
    fontSize: 17,
    fontWeight: '300',
    flex: 1,
    textAlignVertical: 'top',
    color: 'white',
  },
});

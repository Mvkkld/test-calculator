import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Citizen</Text>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttons}>
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((value) => (
          <TouchableOpacity key={value} style={styles.button} onPress={() => handlePress(value)}>
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius:10
  },
  nameText: {
    fontSize: 22,
    padding: 2,
    color: 'white',
    marginBottom: 40,
    marginLeft: -265,
    backgroundColor:'black',
    borderRadius:10

  },
  input: {
    fontSize: 53,
    marginBottom: 10,
    color: '#00000',
    backgroundColor: 'white',
    width: '95%',
    height: 80,
    borderRadius: 5,
    marginTop: 25
  },
  result: {
    fontSize: 40,
    marginBottom: 20,
    color: '#fff',
    backgroundColor:'black',
    width: '95%',
    textAlign:'center',
    borderRadius: 5

  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 17,
  },
  buttonText: {
    fontSize: 36,
    color: 'white'
  },
 });

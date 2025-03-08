import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = ({ initialValue = 0, minValue = null, maxValue = null }) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    if (maxValue !== null && count >= maxValue) return;
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (minValue !== null && count <= minValue) return;
    setCount(prevCount => prevCount - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[
          styles.button, 
          minValue !== null && count <= minValue ? styles.disabledButton : null
        ]} 
        onPress={decrement}
        testID="decrement-button"
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      
      <Text style={styles.counterText} testID="counter-value">{count}</Text>
      
      <TouchableOpacity 
        style={[
          styles.button, 
          maxValue !== null && count >= maxValue ? styles.disabledButton : null
        ]} 
        onPress={increment}
        testID="increment-button"
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#B0C4DE',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

export default Counter;
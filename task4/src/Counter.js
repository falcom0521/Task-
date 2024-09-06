import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter: {count}</Text>
        <View style={styles.counterButtons}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => dispatch(increment())}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, styles.decrementButton]}
            onPress={() => dispatch(decrement())}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  counterContainer: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  counterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#87CEEB', // Green for the increment button
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  decrementButton: {
    backgroundColor: '#87CEEB', // Red for the decrement button
  },
  buttonText: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
  },
});

export default Counter;

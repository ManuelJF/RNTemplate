import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  increment,
  incrementByAmount,
  decrement,
  reset
} from '../../redux/slices/counter'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
 
const Home = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(state => state.counter.counter)
  function onIncrement () {
    dispatch(increment())
  }
  function onDecrement () {
    dispatch(decrement())
  }
  function onIncrementByAmount () {
    dispatch(incrementByAmount(3))
  }
  function onReset () {
    dispatch(reset())
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold'
            }}
          >
            Kondo Soft Template
          </Text>
          <Text
            style={{
              fontSize: 150,
              fontWeight: 'bold'
            }}
          >
            {counter}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            padding: 20,
          }}
        >
          <View
            style={{
              marginBottom: 20
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold'
              }}
            >
              Example Actions
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={onIncrement}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Increment by 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onDecrement}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Decrement by 1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onIncrementByAmount}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Increment by 3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onReset}
              style={{ alignItems: 'center', justifyContent: 'center', padding: 10, marginBottom: 20, backgroundColor: 'orange' }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                Reset counter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default Home;

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Khai báo state để lưu nghiệm của phương trình
  const [solutions, setSolutions] = useState({ x1: null, x2: null });

  // Hàm giải phương trình bậc 2: ax^2 + bx + c = 0
  const solveQuadratic = (a, b, c) => {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      return { x1: 'No real solution', x2: 'No real solution' };
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return { x1, x2 };
  };

  // Tính nghiệm của phương trình bậc 2 với a = 1, b = -3, c = 2
  useEffect(() => {
    const result = solveQuadratic(1, -3, 2);
    setSolutions(result);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Phương trình: 1x² - 3x + 2 = 0</Text>
      <Text>Nghiệm thứ nhất: {solutions.x1}</Text>
      <Text>Nghiệm thứ hai: {solutions.x2}</Text>
      <StatusBar style="auto" />
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

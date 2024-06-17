import React, { useEffect, useRef } from "react";
import { PropsWithChildren, useState } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";

type ProgessBarProps = {
  progress: number;
};

export function ProgressBarCustom({ progress }: ProgessBarProps) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animatedValue.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 300], // 300 is the max width of the container
    extrapolate: "clamp", // Ensure the value stays within the range
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    width: 300,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#EDC09B",
  },
  bar: {
    height: 54,
    backgroundColor: "#ED5C4C",
    borderRadius: 8,
    //borderTopStartRadius: 8,
    //borderBottomLeftRadius: 8,
  },
});

/*
const styles = StyleSheet.create({
  bar: {
    height: 54,
    width: 300,
    marginTop: 8,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#EDC09B",
  },
});*/

import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  children: string;
};

const Permalink = ({ children }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.pressed : styles.container)}
    >
      <Text style={styles.title}>{children}</Text>
    </Pressable>
  );
};

export default Permalink;

const styles = StyleSheet.create({
  title: {
    color: Colors.lightgray,
    fontSize: 16,
  },
  container: {},
  pressed: {
    opacity: 0.75,
  },
});

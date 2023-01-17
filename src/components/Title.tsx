import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
  },
});

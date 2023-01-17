import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {};

const MovieAttributes = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>Adventure Sci-fi 1h 52 min</Text>
      <Text style={styles.title}>Sonic The Headgehog 2</Text>
    </View>
  );
};

export default MovieAttributes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  category: {
    color: "white",
    opacity: 0.8,
    paddingBottom: 12,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

type Props = {
  description: string;
};

const MovieDescription = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default MovieDescription;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    color: Colors.lightgray,
    lineHeight: 20,
  },
});

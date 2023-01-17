import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

type Props = {};

const MovieDescription = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overview</Text>
      <Text style={styles.description}>
        Puss in Boots discovers that his passion for adventure has taken its
        toll: He has burned through eight of his nine lives, leaving him with
        only one life left. Puss sets out on an epic journey to find the
        mythical Last Wish and restore his nine lives.
      </Text>
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

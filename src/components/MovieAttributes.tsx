import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
};

const MovieAttributes = ({
  title,
  release_date,
  popularity,
  vote_average,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.category}
      >{`${vote_average} Star Average \u2022 ${popularity} \u2022 ${release_date}`}</Text>
      <Text style={styles.title}>{title}</Text>
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

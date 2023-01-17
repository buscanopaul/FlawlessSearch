import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ComingSoonItem from "./ComingSoonItem";

type Props = {};

const DATA = [
  {
    id: "16",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "18",
    title: "Third Item",
  },
];

const ComingSoonList = (props: Props) => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={DATA}
      renderItem={({ item }) => <ComingSoonItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ComingSoonList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    left: 20,
  },
});

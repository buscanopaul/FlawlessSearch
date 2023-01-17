import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ComingSoonItem from "./ComingSoonItem";

type Props = {
  coming?: object;
};

const ComingSoonList = ({ coming }: Props) => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={coming}
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

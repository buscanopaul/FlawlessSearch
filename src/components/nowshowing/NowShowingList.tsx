import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NowshowingItem from "./NowshowingItem";

type Props = {
  now?: object;
};

const NowShowingList = ({ now }: Props) => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={now}
      renderItem={({ item }) => <NowshowingItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NowShowingList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    left: 20,
  },
});

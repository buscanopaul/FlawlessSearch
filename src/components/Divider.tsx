import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {};

const Divider = (props: Props) => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

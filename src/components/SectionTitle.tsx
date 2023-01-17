import React from "react";
import { StyleSheet, View } from "react-native";
import Permalink from "./Permalink";
import Title from "./Title";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      <Permalink>See all</Permalink>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 20,
  },
});

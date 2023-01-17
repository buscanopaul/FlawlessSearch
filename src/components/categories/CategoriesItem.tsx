import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

type Props = {
  title: string;
};

const CategoriesItem = ({ title }: Props) => {
  const handleCategory = () => {
    console.log(title);
  };

  return (
    <Pressable
      onPress={handleCategory}
      style={({ pressed }) =>
        pressed
          ? [styles.categoryContainer, styles.pressed]
          : styles.categoryContainer
      }
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default CategoriesItem;

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: Colors.secondary,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.75,
  },
});

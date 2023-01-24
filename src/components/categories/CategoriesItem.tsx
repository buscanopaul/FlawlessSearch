import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

type Props = {
  name: string;
  id: number;
};

type RootStackParamList = {
  Genre: { name: string; id: number };
};

const CategoriesItem = ({ name, id }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleCategory = () => {
    navigation.navigate("Genre", { name: name, id: id });
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
      <Text style={styles.title}>{name}</Text>
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

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoriesItem from "./CategoriesItem";

interface Data {
  id: number;
  name: string;
}

type Props = {
  genre?: Data[];
};

const Categories = ({ genre }: Props) => {
  const getContent = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={genre}
        renderItem={({ item }) => (
          <CategoriesItem name={item.name} id={item.id} />
        )}
        keyExtractor={(item, index) => item.id.toString()}
      />
    );
  };

  return <View style={styles.container}>{getContent()}</View>;
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    left: 20,
  },
});

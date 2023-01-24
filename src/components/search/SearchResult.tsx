import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieListItem from "../movies/MovieListItem";

type Props = {
  search?: object;
};

const SearchResult = ({ search }: Props) => {
  return (
    <View style={styles.mainContainer}>
      {search.toString().length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.container}
          numColumns={2}
          data={search}
          renderItem={({ item }) => <MovieListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noFound}>No Search Found</Text>
      )}
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 15,
    marginHorizontal: 20,
  },
  noFound: {
    color: "white",
  },
});

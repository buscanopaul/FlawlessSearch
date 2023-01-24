import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MovieListItem from "./MovieListItem";

type Props = {
  movie?: object;
  isComing: boolean;
};

const MovieList = ({ movie, isComing }: Props) => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={movie}
      renderItem={({ item }) => (
        <MovieListItem item={item} isComing={isComing} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    left: 20,
  },
});

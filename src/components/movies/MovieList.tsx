import React from "react";
import { FlatList, StyleSheet } from "react-native";
import MovieListItem from "./MovieListItem";

interface Data {
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
}

type Props = {
  movie?: Data[];
  isComing: boolean;
  isHome: boolean;
};

const MovieList = ({ movie, isComing, isHome }: Props) => {
  return (
    <FlatList
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={movie}
      renderItem={({ item }) => (
        <MovieListItem item={item} isComing={isComing} isHome={isHome} />
      )}
      keyExtractor={(item, index) => item.id.toString()}
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

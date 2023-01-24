import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MovieListItem from "../movies/MovieListItem";

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
  search: Data[];
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
          renderItem={({ item }) => <MovieListItem item={item} isHome={true} />}
          keyExtractor={(item, index) => item.id.toString()}
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

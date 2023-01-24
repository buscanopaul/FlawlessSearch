import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import MovieListItem from "../movies/MovieListItem";

type Props = {
  id: number;
};

const GenreList = ({ id }: Props) => {
  const [genre, setGenre] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = "https://api.themoviedb.org/3";
      const genreMoviesUrl = `${baseURL}/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false`;

      const genreResponse = await fetch(genreMoviesUrl);
      const genreData = await genreResponse.json();

      setGenre(genreData.results);
    };

    fetchData();
  }, []);

  return (
    <FlatList
      style={styles.container}
      numColumns={2}
      data={genre}
      renderItem={({ item }) => <MovieListItem item={item} isComing={false} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default GenreList;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    left: 20,
  },
});

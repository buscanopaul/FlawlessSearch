import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
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
  genre_ids: number[];
}

type Props = {
  id?: number;
};

const GenreList = ({ id }: Props) => {
  const [genre, setGenre] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = `https://api.themoviedb.org/3`;
      const genreMoviesUrl = `${baseURL}/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false`;

      const genreResponse = await fetch(genreMoviesUrl);
      const genreData = await genreResponse.json();

      const sortedDates = genreData?.results
        .map((obj: any) => {
          return { ...obj, date: new Date(obj.release_date) };
        })
        .sort((a, b) => b.date - a.date);

      const arr: any = [];

      const double = await sortedDates.map((result: Data) => {
        return result?.genre_ids.map((genre: number) => {
          if (id === genre) {
            arr.push(result);
          }
        });
      });

      setGenre(sortedDates);
    };

    fetchData();
  }, [id]);

  return (
    <FlatList
      style={styles.container}
      numColumns={2}
      data={genre}
      renderItem={({ item }) => (
        <MovieListItem item={item} isComing={false} isHome={false} />
      )}
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

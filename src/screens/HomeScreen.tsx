import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import Categories from "../components/categories/Categories";
import MovieList from "../components/movies/MovieList";
import SearchResult from "../components/search/SearchResult";
import SectionTitle from "../components/SectionTitle";
import Title from "../components/Title";
import Colors from "../constants/Colors";

const HomeScreen = () => {
  const [text, setText] = useState();
  const [genre, setGenre] = useState();
  const [now, setNow] = useState();
  const [coming, setComing] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const baseURL = "https://api.themoviedb.org/3";
      const getCurrentYear = new Date().getFullYear();
      const getCurrentMonth = new Date().getMonth() + 1;
      const getCurrentOtherMonth = new Date().getMonth() + 2;
      const getDate = new Date().getDate();

      const genreUrl = `${baseURL}/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US`;
      const nowUrl = `${baseURL}/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&primary_release_date.gte=${getCurrentYear}-0${getCurrentMonth}-01&primary_release_date.lte=${getCurrentYear}-0${getCurrentMonth}-${getDate}`;
      const comingSoonUrl = `${baseURL}/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&primary_release_date.gte=${getCurrentYear}-0${getCurrentOtherMonth}-01&primary_release_date.lte=${getCurrentYear}-0${getCurrentOtherMonth}-${getDate}`;

      const genreResponse = await fetch(genreUrl);
      const genreData = await genreResponse.json();

      const nowResponse = await fetch(nowUrl);
      const nowData = await nowResponse.json();

      const comingSoonResponse = await fetch(comingSoonUrl);
      const comingData = await comingSoonResponse.json();

      const sortedDates = nowData.results
        ?.map((obj: any) => {
          return { ...obj, date: new Date(obj.release_date) };
        })
        .sort((a: { date: number }, b: { date: number }) => b.date - a.date);

      const sortedDatesComing = comingData.results
        ?.map((obj: any) => {
          const getCurrentDate = new Date().getDate();
          const getDate = new Date(obj.release_date);

          if (getDate.getDate() >= getCurrentDate) {
            console.log(obj);
          }

          return { ...obj, date: new Date(obj.release_date) };
        })
        .sort((a: { date: number }, b: { date: number }) => a.date - b.date);

      setGenre(genreData.genres);
      setNow(sortedDates);
      setComing(sortedDatesComing);
    };

    const fetchSearch = async () => {
      const baseURL = "https://api.themoviedb.org/3";
      const searchUrl = `${baseURL}/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${text}`;

      const searchResponse = await fetch(searchUrl);
      const searchData = await searchResponse.json();
      setSearch(searchData.results);
    };

    if (text) {
      fetchSearch();
    } else {
      fetchData();
      setSearch(text);
    }
  }, [text]);

  const handleSearch = async (text: any) => {
    setText(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Title>Movies</Title>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleSearch(text)}
          value={text}
          placeholder="Search..."
        />
        {search ? (
          <SearchResult search={search} />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Categories genre={genre} />
            <SectionTitle title="Now Showing" />
            <MovieList movie={now} isComing={false} isHome={true} />
            <SectionTitle title="Coming Soon" />
            <MovieList movie={coming} isComing={true} isHome={true} />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    backgroundColor: Colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  input: {
    marginTop: 10,
    backgroundColor: "white",
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

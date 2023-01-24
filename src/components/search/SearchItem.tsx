import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

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
  item: Data;
};

type RootStackParamList = {
  Details: { props: Data; isComing?: boolean; isHome: boolean };
};

const SearchItem = ({ item }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const handleDetails = () => {
    navigation.navigate("Details", {
      props: item,
      isComing: false,
      isHome: true,
    });
  };

  return (
    <Pressable
      onPress={handleDetails}
      style={({ pressed }) =>
        pressed ? [styles.container, styles.pressed] : styles.container
      }
    >
      <Image
        style={styles.cover}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>
        {`${item.vote_average} \u2022 ${item.popularity} ${item.release_date}`}
      </Text>
    </Pressable>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginBottom: 30,
  },
  pressed: {
    opacity: 0.75,
  },
  cover: {
    width: 180,
    height: 300,
    borderRadius: 5,
    resizeMode: "cover",
    backgroundColor: "#2473EB",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 8,
    width: 180,
  },
  subtitle: {
    color: Colors.lightgray,
    fontSize: 12,
  },
});

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Divider from "../components/Divider";
import MovieAttributes from "../components/MovieAttributes";
import MovieDescription from "../components/MovieDescription";

interface Data {
  title: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  overview: string;
  backdrop_path: string;
}

type RootStackParamList = {
  Details: { props: Data; isComing: boolean; isHome: boolean };
};

type BackStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailScreen = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<BackStackParamList>>();
  const { props, isComing, isHome } = route.params;

  const image = {
    uri: `https://image.tmdb.org/t/p/original${props.backdrop_path}`,
  };

  const handleBack = () => {
    if (isHome) {
      navigation.navigate("Home");
    } else {
      navigation.pop();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <SafeAreaView style={styles.header}>
            <Ionicons
              style={styles.back}
              name="arrow-back-circle-sharp"
              size={30}
              color="white"
              onPress={handleBack}
            />
            <LinearGradient
              colors={["transparent", "black"]}
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <MovieAttributes
                title={props.title}
                release_date={props.release_date}
                popularity={props.popularity}
                vote_average={props.vote_average}
              />
            </LinearGradient>
          </SafeAreaView>
        </ImageBackground>
        <Pressable style={styles.buy}>
          <Text style={styles.buyTitle}>
            {isComing ? `Wishlist` : `Buy Tickets`}
          </Text>
        </Pressable>
        <Divider />
        <MovieDescription description={props.overview} />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  back: {
    marginLeft: 20,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    height: 400,
  },
  header: {
    justifyContent: "space-between",
    flex: 1,
  },
  buy: {
    backgroundColor: "#2473EB",
    paddingVertical: 18,
    borderRadius: 5,
    marginTop: 30,
    marginHorizontal: 20,
  },
  buyTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
});

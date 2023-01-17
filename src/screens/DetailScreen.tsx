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
import { Ionicons } from "@expo/vector-icons";
import MovieAttributes from "../components/MovieAttributes";
import MovieDescription from "../components/MovieDescription";
import Divider from "../components/Divider";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const image = {
  uri: "https://wallpapercave.com/wp/wp10941817.jpg",
};

const DetailScreen = (props: Props) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.pop();
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
              <MovieAttributes />
            </LinearGradient>
          </SafeAreaView>
        </ImageBackground>
        <Pressable style={styles.buy}>
          <Text style={styles.buyTitle}>Buy Tickets</Text>
        </Pressable>
        <Divider />
        <MovieDescription />
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

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GenreList from "../components/genre/GenreList";
import SectionTitle from "../components/SectionTitle";
import Colors from "../constants/Colors";

type Props = {};

const GenreScreen = ({ route }) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.pop();
  };

  const { name, id } = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Ionicons
        style={styles.back}
        name="arrow-back-circle-sharp"
        size={30}
        color="white"
        onPress={handleBack}
      />
      <SectionTitle title={name} />
      <GenreList id={id} />
    </SafeAreaView>
  );
};

export default GenreScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  back: {
    marginHorizontal: 20,
  },
});

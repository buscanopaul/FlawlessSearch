import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GenreList from "../components/genre/GenreList";
import SectionTitle from "../components/SectionTitle";
import Colors from "../constants/Colors";

type RootStackParamList = {
  Genre: { name: string; id: number };
};

type BackStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Genre">;

const GenreScreen = ({ route }: Props) => {
  const navigation = useNavigation<StackNavigationProp<BackStackParamList>>();
  const handleBack = () => {
    navigation.navigate("Home");
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

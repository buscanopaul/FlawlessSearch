import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Categories from "../components/categories/Categories";
import ComingSoonList from "../components/comingsoon/ComingSoonList";
import NowShowingList from "../components/nowshowing/NowShowingList";
import SectionTitle from "../components/SectionTitle";
import Title from "../components/Title";
import Colors from "../constants/Colors";

type Props = {
  navigation: () => void;
};

const HomeScreen = () => {
  const [text, onChangeText] = useState<string>("");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView>
          <Title>Movies</Title>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search..."
          />
          <Categories />
          <SectionTitle title="Now Showing" />
          <NowShowingList />
          <SectionTitle title="Coming Soon" />
          <ComingSoonList />
        </ScrollView>
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
  },
});

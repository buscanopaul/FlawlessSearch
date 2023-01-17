import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  navigation: () => void;
};

const HomeScreen = ({ navigation }: Props) => {
  const handleDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable onPress={handleDetails}>
        <Text>go to details screen</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

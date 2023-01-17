import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

interface showingData {
  id: string;
  title: string;
}

type Props = {
  item: showingData;
  navigation: () => void;
};

const ComingSoonItem = ({ item }: Props) => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate("Details");
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
          uri: "https://static-cse.canva.com/blob/931447/1131w-jpUdye0-K50.jpg",
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.id}</Text>
    </Pressable>
  );
};

export default ComingSoonItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  pressed: {
    opacity: 0.75,
  },
  cover: {
    width: 180,
    height: 300,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 8,
  },
  subtitle: {
    color: Colors.lightgray,
    fontSize: 12,
  },
});

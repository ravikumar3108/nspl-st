import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="About Button"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}

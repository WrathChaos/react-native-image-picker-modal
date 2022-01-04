import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ImagePickerModal from "./lib/ImagePickerModal";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const [isVisible, setVisible] = React.useState<boolean>(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View>
        <RNBounceable
          style={{
            height: 50,
            width: "90%",
            borderRadius: 16,
            backgroundColor: "#a03",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setVisible(true);
          }}
        >
          <Text style={{ color: "#fff", fontSize: 24 }}>
            Image Picker Modal
          </Text>
        </RNBounceable>
      </View>
      <ImagePickerModal
        data={["Take a photo", "Select from the library"]}
        isVisible={isVisible}
      />
    </SafeAreaView>
  );
};

export default App;

import React from "react";
import {
  Image,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import ImagePickerModal from "./lib/ImagePickerModal";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const [isVisible, setVisible] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);

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
      {selectedItem && (
        <Image
          resizeMode="contain"
          style={{ height: 550, width: 350, alignSelf: "center" }}
          source={{ uri: selectedItem.assets[0].uri }}
        />
      )}
      <ImagePickerModal
        data={["Take a photo", "Select from the library"]}
        isVisible={isVisible}
        onCancelPress={() => {
          setVisible(false);
        }}
        onBackdropPress={() => {
          setVisible(false);
        }}
        onPress={(item: any) => {
          console.log(item);

          setSelectedItem(item);
        }}
      />
    </SafeAreaView>
  );
};

export default App;

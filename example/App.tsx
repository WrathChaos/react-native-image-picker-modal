import React from "react";
import { Image, Text, View, FlatList, SafeAreaView } from "react-native";
import LottieView from "lottie-react-native";
import ImagePickerModal from "react-native-image-picker-modal";
import RNBounceable from "@freakycoder/react-native-bounceable";
import useStateWithCallback from "@freakycoder/react-use-state-with-callback";

const App = () => {
  const [isVisible, setVisible] = useStateWithCallback<boolean>(false);
  const [selectedItem, setSelectedItem] = useStateWithCallback<any>(null);

  const PickerButton = () => (
    <View style={{ marginTop: 124 }}>
      <RNBounceable
        style={{
          height: 100,
          width: 250,
          borderRadius: 16,
          backgroundColor: "#4f74fb",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Text style={{ color: "#fff", fontSize: 24 }}>Image Picker</Text>
      </RNBounceable>
    </View>
  );

  const ImageList = () =>
    selectedItem ? (
      <FlatList
        horizontal
        style={{ marginTop: 64 }}
        data={selectedItem.assets}
        renderItem={({ item }) => (
          <Image
            resizeMode="cover"
            borderRadius={600}
            style={{
              height: 150,
              width: 150,
              marginLeft: 16,
              borderRadius: 16,
            }}
            source={{ uri: item.uri }}
          />
        )}
      />
    ) : (
      <LottieView
        source={require("./assets/image-preloader.json")}
        autoPlay
        loop
        style={{ height: 300, width: 300 }}
      />
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#282828",
      }}
    >
      <PickerButton />
      <ImageList />
      <ImagePickerModal
        title="You can either take a picture or select one from your album."
        data={["Take a photo", "Select from the library"]}
        isVisible={isVisible}
        onCancelPress={() => {
          setVisible(false);
        }}
        onBackdropPress={() => {
          setVisible(false);
        }}
        onPress={(item: any) => {
          setVisible(false, () => {
            setSelectedItem(item);
          });
        }}
      />
    </SafeAreaView>
  );
};

export default App;

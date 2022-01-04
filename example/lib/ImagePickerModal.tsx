import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import PickerModal, {
  IPickerModalProps,
} from "@freakycoder/react-native-picker-modal";
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from "react-native-image-picker";
/**
 * ? Local Imports
 */
import styles from "./ImagePickerModal.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IImagePickerModalProps extends IPickerModalProps {
  style?: CustomStyleProp;
  isVisible: boolean;
  data: string[];
}

const ImagePickerModal: React.FC<IImagePickerModalProps> = ({
  style,
  isVisible,
  data,
  ...rest
}) => {
  const handleSelection = async (selectedItem: string) => {
    if (selectedItem === data[0]) {
      const options = {
        saveToPhotos: true,
        mediaType: "photo" as MediaType,
        includeBase64: false,
        includeExtra: true,
      };
      const result = await launchCamera(options);
      console.log(result);
    } else if (selectedItem === data[1]) {
      const options = {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: "library" as MediaType,
        includeBase64: false,
        includeExtra: true,
      };
      const result = await launchImageLibrary(options);
      console.log(result);
    }
  };

  return (
    <PickerModal
      isVisible={isVisible}
      {...rest}
      data={data}
      title="You can either take a picture or select one from your album."
      onPress={handleSelection}
      onCancelPress={() => {}}
    />
  );
};

export default ImagePickerModal;

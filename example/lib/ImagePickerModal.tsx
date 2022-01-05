import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import PickerModal, {
  IPickerModalProps,
} from "@freakycoder/react-native-picker-modal";
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from "react-native-image-picker";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

const PHOTO = "photo";
const LIBRARY = "library";

interface IImagePickerModalProps extends IPickerModalProps {
  style?: CustomStyleProp;
  isVisible: boolean;
  data: string[];
  onPress: (item: any) => void;
}

const ImagePickerModal: React.FC<IImagePickerModalProps> = ({
  isVisible,
  data,
  onPress,
  ...rest
}) => {
  const handleSelection = async (selectedItem: string) => {
    if (selectedItem === data[0]) {
      const options = {
        saveToPhotos: true,
        mediaType: PHOTO as MediaType,
        includeBase64: false,
        includeExtra: true,
      };
      const result = await launchCamera(options);
      onPress && onPress(result);
    } else if (selectedItem === data[1]) {
      const options = {
        selectionLimit: 0,
        mediaType: LIBRARY as MediaType,
        includeBase64: false,
        includeExtra: true,
      };
      const result = await launchImageLibrary(options);
      onPress && onPress(result);
    }
  };

  return (
    <PickerModal
      isVisible={isVisible}
      data={data}
      {...rest}
      onPress={handleSelection}
    />
  );
};

export default ImagePickerModal;

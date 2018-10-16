import { Animated, Easing } from "react-native";
import { createStackNavigator } from "react-navigation";
import CameraScreen from "./camera-screen/CameraScreen";
import CustomComponentScreen from "./custom-components-per-platform/CustomComponentScreen";
import GridScreen from "./grid-screen/GridScreen";
import ImagePickerScreen from "./image-picker/ImagePickerScreen";
import ListScreen from "./list-screen/ListScreen";
import LottieScreen from "./lottie-screen/LottieScreen";
import MainScreen from "./main-screen/MainScreen";
import MapScreen from "./map-screen/MapScreen";
import NavigationScreen from "./navigation-screen/NavigationScreen";
import ResourcesScreen from "./resources-screen/ResourcesScreen";
import ScrollScreen from "./scroll-screen/ScrollScreen";

const CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY },
    ],
  };
};

const SlideFromRight = (index, position, width) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || "default";
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  };
};
const MainStack = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  Resources: {
    screen: ResourcesScreen,
  },
  Navigation: {
    screen: NavigationScreen,
  },
  ListOfComponents: {
    screen: ListScreen,
  },
  ScrollViewComponent: {
    screen: ScrollScreen,
  },
  GridViewComponent: {
    screen: GridScreen,
  },
  CameraComponent: {
    screen: CameraScreen,
  },
  ImagePickerComponent: {
    screen: ImagePickerScreen,
  },
  MapScreen: {
    screen: MapScreen,
  },
  LottieScreen: {
    screen: LottieScreen,
  },
  CustomComponentsScreen: {
    screen: CustomComponentScreen,
  },
},
  {
    headerMode: "none",
    transitionConfig,
  });

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    NavigationModalScreen: {
      screen: NavigationScreen,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  },
);
export default RootStack;

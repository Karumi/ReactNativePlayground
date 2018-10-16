import { createStackNavigator } from "react-navigation";
import CameraScreen from "./camera-screen/CameraScreen";
import GridScreen from "./grid-screen/GridScreen";
import ImagePickerScreen from "./image-picker/ImagePickerScreen";
import ListScreen from "./list-screen/ListScreen";
import MainScreen from "./main-screen/MainScreen";
import MapScreen from "./map-screen/MapScreen";
import NavigationScreen from "./navigation-screen/NavigationScreen";
import ResourcesScreen from "./resources-screen/ResourcesScreen";
import ScrollScreen from "./scroll-screen/ScrollScreen";

const MainStack = createStackNavigator({
  Home: {
    screen: MainScreen, navigationOptions: {
      header: null,
    },
  },
  Resources: {
    screen: ResourcesScreen, navigationOptions: {
      header: null,
    },
  },
  Navigation: {
    screen: NavigationScreen, navigationOptions: {
      header: null,
    },
  },
  ListOfComponents: {
    screen: ListScreen, navigationOptions: {
      header: null,
    },
  },
  ScrollViewComponent: {
    screen: ScrollScreen, navigationOptions: {
      header: null,
    },
  },
  GridViewComponent: {
    screen: GridScreen, navigationOptions: {
      header: null,
    },
  },
  CameraComponent: {
    screen: CameraScreen, navigationOptions: {
      header: null,
    },
  },
  ImagePickerComponent: {
    screen: ImagePickerScreen, navigationOptions: {
      header: null,
    },
  },
  MapScreen: {
    screen: MapScreen, navigationOptions: {
      header: null,
    },
  },
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

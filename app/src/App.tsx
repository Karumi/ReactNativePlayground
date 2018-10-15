import { createStackNavigator } from "react-navigation";
import GridScreen from "./grid-screen/GridScreen";
import ListScreen from "./list-screen/ListScreen";
import MainScreen from "./main-screen/MainScreen";
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

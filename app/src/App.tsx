import { createStackNavigator } from "react-navigation";
import MainScreen from "./main-screen/MainScreen";
import NavigationScreen from "./navigation-screen/NavigationScreen";
import ResourcesScreen from "./resources-screen/ResourcesScreen";

const app = createStackNavigator({
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
});

export default app;

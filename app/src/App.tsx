import { createStackNavigator } from "react-navigation";
import MainScreen from "./main-screen/MainScreen";
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
});

export default app;

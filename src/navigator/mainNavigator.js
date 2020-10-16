import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile145748Navigator from '../features/UserProfile145748/navigator';
import Settings145747Navigator from '../features/Settings145747/navigator';
import Settings145745Navigator from '../features/Settings145745/navigator';
import SignIn2145743Navigator from '../features/SignIn2145743/navigator';
import ArticleList145725Navigator from '../features/ArticleList145725/navigator';
import ArticleList145724Navigator from '../features/ArticleList145724/navigator';
import ArticleList145723Navigator from '../features/ArticleList145723/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile145748: { screen: UserProfile145748Navigator },
Settings145747: { screen: Settings145747Navigator },
Settings145745: { screen: Settings145745Navigator },
SignIn2145743: { screen: SignIn2145743Navigator },
ArticleList145725: { screen: ArticleList145725Navigator },
ArticleList145724: { screen: ArticleList145724Navigator },
ArticleList145723: { screen: ArticleList145723Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

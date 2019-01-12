import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens();

Navigation.setRoot({
  Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'io.cloudgrey.HomeScreen'
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'The App'
          }
        }
      }
    }
  }
});

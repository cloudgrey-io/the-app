import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('io.cloudgrey.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('io.cloudgrey.EchoScreen', () => EchoScreen);
}

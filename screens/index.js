import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';
import LoginScreen from './LoginScreen';
import SecretScreen from './SecretScreen';
import VerifySMSScreen from './VerifySMSScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('io.cloudgrey.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('io.cloudgrey.EchoScreen', () => EchoScreen);
  Navigation.registerComponent('io.cloudgrey.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('io.cloudgrey.SecretScreen', () => SecretScreen);
  Navigation.registerComponent('io.cloudgrey.VerifySMSScreen', () => VerifySMSScreen);
}

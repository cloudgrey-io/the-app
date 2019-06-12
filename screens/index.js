import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import EchoScreen from './EchoScreen';
import LoginScreen from './LoginScreen';
import SecretScreen from './SecretScreen';
import VerifySMSScreen from './VerifySMSScreen';
import ClipboardScreen from './ClipboardScreen';
import HybridScreen from './HybridScreen';
import Hybrid2Screen from './Hybrid2Screen';
import ListScreen from './ListScreen';
import PhotoScreen from './PhotoScreen';
import LocationScreen from './LocationScreen';
import PickerScreen from './PickerScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('io.cloudgrey.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('io.cloudgrey.EchoScreen', () => EchoScreen);
  Navigation.registerComponent('io.cloudgrey.LoginScreen', () => LoginScreen);
  Navigation.registerComponent('io.cloudgrey.SecretScreen', () => SecretScreen);
  Navigation.registerComponent('io.cloudgrey.VerifySMSScreen', () => VerifySMSScreen);
  Navigation.registerComponent('io.cloudgrey.ClipboardScreen', () => ClipboardScreen);
  Navigation.registerComponent('io.cloudgrey.HybridScreen', () => HybridScreen);
  Navigation.registerComponent('io.cloudgrey.Hybrid2Screen', () => Hybrid2Screen);
  Navigation.registerComponent('io.cloudgrey.ListScreen', () => ListScreen);
  Navigation.registerComponent('io.cloudgrey.PhotoScreen', () => PhotoScreen);
  Navigation.registerComponent('io.cloudgrey.LocationScreen', () => LocationScreen);
  Navigation.registerComponent('io.cloudgrey.PickerScreen', () => PickerScreen);
}

import {Platform} from 'react-native';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.createElement('div');
  if (!rootTag.parentElement) {
    document.body.appendChild(rootTag);
  }
  AppRegistry.runApplication(appName, {initialProps: {}, rootTag});
} else {
  AppRegistry.registerComponent(appName, () => App);
}

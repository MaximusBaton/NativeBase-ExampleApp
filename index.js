import {AppRegistry, StatusBar} from 'react-native';
import setup from './src/setup';

/*
Copy your icons from iOS and Android
Update displayName in app.json to the new name
Delete ios/ and android/ directories
Run react-native eject
Replace the icons you copied earlier
Run react-native link
*/
import {name as appName} from './app.json';

StatusBar.setBarStyle('default');
AppRegistry.registerComponent(appName, setup);

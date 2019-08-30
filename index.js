
import {AppRegistry} from 'react-native';
import App from './src/screens/App';
import Navigator from './src/Navigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);

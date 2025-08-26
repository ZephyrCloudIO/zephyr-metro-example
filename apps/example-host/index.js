import { withAsyncStartup } from '@module-federation/metro/bootstrap';
import {AppRegistry, AppState} from 'react-native';

import App from './src/App';
import {name as appName} from './app.json';
import {useEffect, useRef} from 'react';
import restart from 'react-native-restart-app';



// create async boundry through withAsyncStartup helper
// and pass the getter function for the app component
// optionally a getter function for the fallback component
AppRegistry.registerComponent(
  appName,
  withAsyncStartup(
    () => require('./entry-point'),
    () => require('./src/Fallback')
  )
);

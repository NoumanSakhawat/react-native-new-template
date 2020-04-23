/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';

const APP_NAME = 'ProjectName';
const APP_NAMETB = "ProjectName";

AppRegistry.registerComponent(APP_NAME, () => App);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent(APP_NAMETB, () => App);
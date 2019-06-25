import { YellowBox } from 'react-native';

if (__DEV__) {
  // eslint-disable-next-line global-require
  require('react-devtools');
  YellowBox.ignoreWarnings(['Remote debugger']);
}

import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/HomePage';
// import PeopleDetailPage from './src/pages/PeopleDetailPage';


export default createStackNavigator ({
  'Main': {
    screen: PeoplePage
  },
}, {
  navigationOptions: {
    title: 'People!',
    headerTintColor: '#FFF',
    headerStyle: {
      backgroundColor: '#264676',
      borderBottomWidth: 1,
      borderBottomColor: '#EEE'
    }
  }
});

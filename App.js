import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation'

import PeoplePage from './src/screens/PeoplePage'
import PersonDetail from './src/screens/PersonDetail'
import capitalizeFirstLetter from './src/util/capitalizeFirstLetter'

const StackNavigator = createStackNavigator({
  'Main':{
    screen: PeoplePage
  },
  'PersonDetail':{
    screen: PersonDetail,
    navigationOptions: ({navigation}) => {
      const personName = navigation.state.params.person.name.first

      return({
        title: capitalizeFirstLetter(personName),
        headerTitleStyle: {
          color: 'white',
          fontSize: 30
        }
      })
    }
  }  
  }, {
    defaultNavigationOptions: {
      title: 'Contatos',
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'
      },
      headerStyle: {
        backgroundColor: '#c6a2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5'
      }
    }
  }
)

const AppContainer = createAppContainer(StackNavigator)

export default AppContainer
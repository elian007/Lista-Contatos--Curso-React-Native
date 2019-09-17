import React, {Component} from 'react'
import {Text, View} from 'react-native'
import axios from 'axios'
import PeopleList from '../components/PeopleList'
import PersonDetail from './PersonDetail';

type Props = {};
export default class PeoplePage extends Component <Props>{
  
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
    .then(response =>{
      const {results} = response.data
      this.setState({
        people: results
      })
    })
  }

  renderList(){
   const textElements = this.state.people.map(person =>{
    const{first} = person.name
     return <Text key={first}>{first}</Text>
   })
   return textElements
  }

  render(){
    this.props.navigation.navigate('PersonDetail')

    return(
      <View>
        <PeopleList 
            people = {this.state.people} 
            onPressItem={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
        />
      </View>
    )
  }
}
 
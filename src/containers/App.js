import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {connect} from "react-redux"
import { setsearchfield } from '../components/action';

 const mapstatetoprops=state=>{
  return{
  searchfield:state.searchfield
}
}
 const mapstatetodispatch=(dispatch)=>{
  return{
    onsearchchange:(event)=>{
      dispatch(setsearchfield(event.target.value))
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }
  render() {
    const { robots } = this.state;
    const {searchfield,onsearchchange}=this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onsearchchange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapstatetoprops,mapstatetodispatch)(App);
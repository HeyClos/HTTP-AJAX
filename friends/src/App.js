import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList'
import FriendsForm from './components/FriendsForm'

// const LinksUrl = {
//   home: '/'
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
 
  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data });
    })
    .catch(err => console.log(err));
  }

 render() {
  return (
    <div className='App'>
     {/* <SavedList list={this.state.savedList} /> */}
    {/* <Route exact path="/" component={MovieList} /> */}
    {/* <Route exact path="/movies/:id"
      render={(props) =>
        <Movie {...props} addToSavedList={this.addToSavedList} />} /> */}
    <Route
        exact
        path="/"
        render={() => <FriendsList friends={this.state.friends} />}
      />
    </div>
  );
  }
}

export default App;


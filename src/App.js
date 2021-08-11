import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

import Person from './components/Person';

function App() {
  const [user, setUser] = useState({
    username: "CRHarding",
    email: "casey@casey.com",
    picture: {medium: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/03/THOR.jpg"},
    about: "Lorem ipsum dolor sit amet",
    friends: []
  })

  const [people, setPeople] = useState(null);

  useEffect(async () => {
    const personArray = [];
    for (let i = 0; i < 5; i++) {
      const person = await axios('https://randomuser.me/api');
      personArray.push(person.data.results[0]);
    }

    setPeople(personArray);
  }, []);

  const addFriend = (username) => {
    const friends = user.friends;
    friends.push(username);
    console.log(friends);
    setUser({ ...user, friends });
  }

  return (
    <div className="App">
      <h1>CaseyBook!</h1>
      <Person user={user} addFriend={addFriend} />
      { people && people.map(user => <Person user={user} addFriend={addFriend} />) }
    </div>
  );
}

export default App;

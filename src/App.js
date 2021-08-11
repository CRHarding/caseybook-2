import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [user, setUser] = useState({
    username: "CRHarding",
    uuid: "12345678",
    email: "casey@casey.com",
    profilePic: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/03/THOR.jpg",
    about: "Lorem ipsum dolor sit amet",
    friends: []
  })
  return (
    <div className="App">
      <h1>CaseyBook!</h1>
      <p>{user.username}</p>
      <img src={user.profilePic} />
      <p>{user.about}</p>
      {user.friends.map(friend => <p>{friend.name}</p>)}
    </div>
  );
}

export default App;

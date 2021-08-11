import React from 'react';

const Person = (props) => {
    const { user } = props;
    return (
        <>
            { user.username ? <p>{user.username}</p> : <p>{user.login.username}</p> }
            <img src={user.picture.medium} />
            <p>{user.about}</p>
            {user.username !== "CRHarding" && 
                <button onClick={() => props.addFriend(user.login.username)}>Add friend!</button>
            }
            { user.friends && user.friends.map(friend => <p>{friend}</p>) }
        </>
    )
}

export default Person;
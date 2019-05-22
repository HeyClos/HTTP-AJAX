import React from 'react'
import FriendsForm from './FriendsForm'

const FriendsList = (props) => {
    return (
        <div>
            {props.friends.map(friend => (
                <FriendsForm friend={friend} />
            ))}
        </div>
    )
}

export default FriendsList;

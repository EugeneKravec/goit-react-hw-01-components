import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {
    return (
        <div>
            <ul className="friend-list">
                {friends.map(friend => (
                    <FriendListItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}
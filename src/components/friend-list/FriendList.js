import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'


export default function FriendList({ friends }) {
    return (
        <div>
            <ul className="friend-list">
                {friends.map(friendItem => (
                    <FriendListItem
                        key={friendItem.id}
                        avatar={friendItem.avatar}
                        name={friendItem.name}
                        isOnline={friendItem.isOnline}
                    />
                ))}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}
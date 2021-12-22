import reactDom from "react-dom";
import Profile from "./components/social-profile/Profile";
import FriendList from "./components/friend-list/FriendList";
import user from './refs/data.json'
import friends from './refs/friends.json'



export default function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <FriendList friends={friends} />
        </div>
    )
}

reactDom.render(App, document.getElementById('root'))
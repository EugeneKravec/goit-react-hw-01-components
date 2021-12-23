import reactDom from "react-dom";
import Profile from "./components/social-profile/Profile";
import FriendList from "./components/friend-list/FriendList";
import Statistics from "./components/statistics/Statistics";
import user from './refs/user.json';
import friends from './refs/friends.json';
import data from './refs/data.json';

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
            <FriendList
                friends={friends}
            />
            <Statistics
                // title="UPLOAD STATS"
                stats={data}
            />
        </div>
    )
}

reactDom.render(App, document.getElementById('root'))
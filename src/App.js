import reactDom from "react-dom";

import Profile from "./components/social-profile/Profile";
import FriendList from "./components/friend-list/FriendList";
import Statistics from "./components/statistics/Statistics";
import StatisticList from './components/statistics/StatisticList';

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
            <Statistics title="Upload stats">
                <StatisticList stats={data} />
            </Statistics>
        </div>
    )
}

reactDom.render(App, document.getElementById('root'))
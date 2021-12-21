import reactDom from "react-dom";
import Profile from "./components/social-profile/Profile";
import user from './refs/data.json'

export default function App() {
    return (
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
    )
}

reactDom.render(App, document.getElementById('root'))
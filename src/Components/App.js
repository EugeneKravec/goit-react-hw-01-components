import reactDom from "react-dom";
import Profile from "./Profile";
reactDom.render(
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />,
    document.getElementById('root'))
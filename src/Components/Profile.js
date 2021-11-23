import user from '../src/refs/user.json';
import reactDom from 'react-dom';

function Profile() {
    return <div class="profile">
        <div class="description">
            <img
                src={user.avatar}
                alt="User avatar"
                class="avatar"
            />
            <p class="name">{user.username}</p>
            <p class="tag">{user.tag}</p>
            <p class="location">{user.location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers </span>
                <span class="quantity">{user.stats.followers}</span>
            </li>
            <li>
                <span class="label">Views </span>
                <span class="quantity">{user.stats.views}</span>
            </li>
            <li>
                <span class="label">Likes </span>
                <span class="quantity">{user.stats.likes}</span>
            </li>
        </ul>
    </div>
}
reactDom.render(<Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/>, document.getElementById('root'))
export default Profile
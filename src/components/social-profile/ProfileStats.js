import PropTypes from 'prop-types';

export default function ProfileStats({ followers, views, likes }) {
    return (
        <div className="profile-stats">
            <ul className="stats">
                <li>
                    <span className="label">Followers </span>
                    <span className="quantity">{followers}</span>
                </li>
                <li>
                    <span className="label">Views </span>
                    <span className="quantity">{views}</span>
                </li>
                <li>
                    <span className="label">Likes </span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>)
}

ProfileStats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
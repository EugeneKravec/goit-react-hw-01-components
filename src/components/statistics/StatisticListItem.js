import PropTypes from 'prop-types';

export default function StatisticListItem({ id, label, percentage }) {
    return (
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    )
}

StatisticListItem.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.string,
}
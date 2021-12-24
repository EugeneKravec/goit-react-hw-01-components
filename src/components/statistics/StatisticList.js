import PropTypes from 'prop-types';
import StatisticListItem from './StatisticListItem'

export default function StatisticList({ stats }) {
    return (<div>
        <ul className="stats-list">
            {stats.map(stat => (<StatisticListItem
                key={stat.id}
                label={stat.label}
                percentage={stat.percentage}
            />
            ))}
        </ul>
    </div>
    )
}

StatisticList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape)
}
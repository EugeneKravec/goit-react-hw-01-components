import PropTypes from 'prop-types';
export default function Statistics({ title, children }) {
    return <section className="statistics">
        {{ title } && <h2 className="title">{title}</h2>}
        {children}
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string
}
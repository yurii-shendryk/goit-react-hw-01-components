import StatisticList from '../StatisticList/StatisticList';
import PropTypes from 'prop-types';
import styles from './Statistic.module.css';
const Statistic = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <StatisticList stats={stats} />
  </section>
);

Statistic.defaultProps = {
  title: '',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistic;

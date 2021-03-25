import StatisticItem from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';

const StatisticList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <StatisticItem key={id} label={label} percentage={percentage} />
    ))}
  </ul>
);

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticList;

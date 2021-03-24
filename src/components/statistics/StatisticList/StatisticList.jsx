import StatisticItem from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import styles from './StatisticList.module.css';
import randomColor from '../js/randomColor';
const StatisticList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(({ id, label, percentage }) => (
      <li
        key={id}
        className={styles.item}
        style={{ backgroundColor: randomColor() }}
      >
        <StatisticItem label={label} percentage={percentage} />
      </li>
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

import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css';
import randomColor from '../js/randomColor';
const StatisticItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className={styles.label}>{label} </span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;

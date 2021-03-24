import PropTypes from 'prop-types';
import styles from './Statistic.module.css';
const Statistic = ({ title, children }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

Statistic.defaultProps = {
  title: '',
  children: [],
};

Statistic.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistic;

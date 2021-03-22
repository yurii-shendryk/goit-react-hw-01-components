import StatisticItem from "./StatisticItem";
import PropTypes from "prop-types";
const StatisticList = ({ stats }) => (
  <ul className="stat-list">
    {stats.map(({ id, label, percentage }) => (
      <li key={id} className="item">
        <StatisticItem label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

StatisticList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticList;

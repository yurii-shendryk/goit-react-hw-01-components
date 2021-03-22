import PropTypes from "prop-types";
const Statistic = ({ title, children }) => (
  <section className="statistics">
    <h2 className="title">{title ? title : null}</h2>
    {children}
  </section>
);

Statistic.propTypes = {
  title: PropTypes.string,
};

export default Statistic;

import PropTypes from 'prop-types';
import defaultImage from './default-avatar.png';
import styles from './FriendsListItem.module.css';
const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    {isOnline ? (
      <span className={styles.online}></span>
    ) : (
      <span className={styles.offline}></span>
    )}
    {avatar ? (
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
    ) : (
      <img className={styles.avatar} src={defaultImage} alt={name} width="48" />
    )}

    <p className={styles.name}>{name}</p>
  </li>
);

FriendsListItem.defaultProps = {
  avatar: defaultImage,
};

FriendsListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['online', 'offline']),
};

export default FriendsListItem;

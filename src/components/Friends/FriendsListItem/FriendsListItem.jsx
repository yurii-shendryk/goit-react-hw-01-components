import PropTypes from 'prop-types';
import defaultImage from './default-avatar.png';
const FriendsListItem = ({ isOnline, avatar, name }) => {
  //   const statusClass = isOnline ? styles.disabled : styles.active;
  return (
    <>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendsListItem.defaultProps = {
  avatar: defaultImage,
};

FriendsListItem.propTypes = {
  //   isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FriendsListItem;

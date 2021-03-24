import PropTypes from 'prop-types';
import FriendsListItem from '../FriendsListItem/FriendsListItem';
const FriendList = ({ friends }) => (
  <ul className="friends-list">
    {friends.map(({ id, avatar, name, isOnline }) => (
      <li className="item" key={id}>
        <FriendsListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;

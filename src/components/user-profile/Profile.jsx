import PropTypes from "prop-types";

import defaultImage from "./default-avatar.png";

const Profile = ({ avatar, name, tag, location, children }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      {children}
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Profile;

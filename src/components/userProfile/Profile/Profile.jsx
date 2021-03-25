import PropTypes from 'prop-types';
import Stats from '../Stats/Stats';
import styles from './Profile.module.css';
import defaultImage from './default-avatar.png';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
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
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

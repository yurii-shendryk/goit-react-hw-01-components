import user from './user.json';
import Profile from './components/user-profile/Profile';
import Stats from './components/user-stats/Stats';
import StatisticList from './components/statistics/StatisticList';
import statisticalData from './statistical-data.json';
import Statistic from './components/statistics/Statistic.jsx';
const App = () => {
  return (
    <>
      <h2>user-profile</h2>

      <Profile2
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      >
        <Stats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Profile2>

      <h2>statistics</h2>
      <Statistic title="Upload Stats">
        <StatisticList stats={statisticalData} />
      </Statistic>
    </>
  );
};

export default App;

import Container from './components/Container/Container';
import Profile from './components/userProfile/Profile/Profile';
import Stats from './components/userProfile/Stats/Stats';
import StatisticList from './components/statistics/StatisticList/StatisticList';
import Statistic from './components/statistics/Statistic/Statistic';
import FriendsList from './components/Friends/FriendsList/FriendsList';
import TransactionHistory from './components/Transactions/TransactionHistory/TransactionHistory';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
const App = () => {
  return (
    <Container>
      {/* task 1 */}
      <Profile
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
      </Profile>
      {/* task 2 */}
      <Statistic title="Upload Stats">
        <StatisticList stats={statisticalData} />
      </Statistic>
      {/* task 3 */}
      <FriendsList friends={friends} />
      {/* task 4 */}
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;

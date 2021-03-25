import Container from './components/Container/Container';
import Profile from './components/userProfile/Profile/Profile';
import Statistic from './components/statistics/Statistic/Statistic';
import FriendsList from './components/Friends/FriendsList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
const App = () => {
  return (
    <Container>
      {/* task 1 */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* task 2 */}
      <Statistic title="Upload Stats" stats={statisticalData} />
      {/* task 3 */}
      <FriendsList friends={friends} />
      {/* task 4 */}
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;

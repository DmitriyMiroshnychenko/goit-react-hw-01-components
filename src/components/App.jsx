import { SocialProfile } from './SocialProfile/SocialProfile';
import user from './SocialProfile/data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/data/transactions.json';

export const App = () => {
  return (
    <div>
      <SocialProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

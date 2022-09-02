import React from 'react';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';
import { Container, Wrapper } from 'components/App/App.styled';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <Container>
      <Wrapper>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        ></Profile>
        <Statistics title="Upload Stats" stats={data}></Statistics>
        <FriendList friends={friends}></FriendList>
      </Wrapper>
      <Transactions items={transactions}></Transactions>
    </Container>
  );
};

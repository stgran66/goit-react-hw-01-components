import React from 'react';

import PropTypes from 'prop-types';
import {
  FriendItem,
  OnlineStatus,
  FriendAvatar,
  FriendName,
} from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import styled from 'styled-components';

export const FriendItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-right: 10px;
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

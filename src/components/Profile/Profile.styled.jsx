import styled from 'styled-components';

export const ProfileCard = styled.div`
  border: 1px solid lightgrey;
  padding-top: 20px;
  width: 300px;
  background-color: #8b9dc3;
  height: fit-content;
`;

export const ProfileDescr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileAvatar = styled.img`
  width: 120px;
  border-radius: 50%;
  background-color: whitesmoke;
`;

export const ProfileName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ProfileText = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  color: lightgray;
`;

export const ProfileStats = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  background-color: #3b5998;
  margin-bottom: 0;
  list-style-type: none;

  li {
    display: flex;
    flex-basis: calc(100% / 3);
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  li:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const ProfileStatsLabel = styled.span`
  color: lightgray;
  margin-bottom: 5px;
`;

export const ProfileStatsQuantity = styled.span`
  font-weight: bold;
`;

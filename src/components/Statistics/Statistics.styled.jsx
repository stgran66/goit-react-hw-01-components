import styled from 'styled-components';

export const StatisticSection = styled.section`
  background-color: #8b9dc3;
`;

export const StatisticTitle = styled.h2`
  text-transform: uppercase;
  color: grey;
  text-align: center;
`;

export const StatisticList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  display: flex;
  margin: 0;
`;

export const StatisticItem = styled.li`
  padding: 10px;
  color: whitesmoke;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;

  background-color: ${() => {
    return getRandomDarkColor();
  }};
`;

export const StatisticLabel = styled.span`
  font-size: 12px;
`;

export const StatisticPercentage = styled.span`
  margin-top: 5px;
  font-size: 22px;
`;

function getRandomDarkColor() {
  let color = '#';
  for (var i = 0; i < 6; i += 1) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}

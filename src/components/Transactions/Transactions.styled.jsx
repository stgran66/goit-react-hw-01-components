import styled from 'styled-components';

export const TransactionTable = styled.table`
  position: absolute;
  top: 10px;
  left: 10px;

  tr {
    background-color: #8b9dc3;
  }

  thead tr:first-child {
    background-color: #3b5998;
  }

  thead {
    background-color: #3b5998;
    color: whitesmoke;
  }

  th {
    padding: 5px 30px 5px 30px;
  }

  tr:nth-child(2n) {
    background-color: lightgrey;
  }

  td {
    padding: 5px 30px 5px 30px;
  }
`;

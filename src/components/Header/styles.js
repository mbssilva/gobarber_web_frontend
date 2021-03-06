import styled from 'styled-components';

export const Container = styled.div`
  height: 74px;
  background-color: #fff;
  padding: 5px 30px;
`;

export const Content = styled.div`
  height: 74px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      border-right: 1px solid #ccc;
      padding-right: 20px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #ccc;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #444;
    }
  }

  img {
    height: 42px;
    width: 42px;
    border-radius: 50%;
  }
`;

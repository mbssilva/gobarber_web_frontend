import styled from 'styled-components';

import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background-color: rgba(0, 0, 0, 0.15);
      border: 0;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      background-color: #3b9eff;
      border: 0;
      border-radius: 5px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 5px 0 0;
      font-weight: bold;
      font-size: 16px;
      transition: 300ms;

      &:hover {
        background-color: ${darken(0.06, '#3b9eff')};
      }
    }

    a {
      background-color: #333;
      padding: 5px;
      border-radius: 5px;
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

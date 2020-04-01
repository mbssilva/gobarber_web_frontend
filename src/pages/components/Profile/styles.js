import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;

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

    span {
      letter-spacing: 0.8px;
      color: #fb1f24;
      padding: 1px 3px;
      border-radius: 4px;
      margin: 0 0 10px;
      font-weight: bold;
      align-self: flex-start;
    }

    hr {
      border: 0;
      height: 2px;
      background: rgba(255, 255, 255, 0.4);
      margin: 10px 0 20px;
    }

    > button {
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
  }

  hr {
    border: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.4);
    margin: 20px 0 20px;
  }

  > button {
    display: blocck;
    width: 100%;
    background-color: #fb1f2f;
    border: 0;
    border-radius: 5px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: 300ms;

    &:hover {
      background-color: ${darken(0.15, '#fb1f2f')};
    }
  }
`;

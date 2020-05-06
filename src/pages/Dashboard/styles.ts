import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 50px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 200px;
    background: #cb85d4;
    border: 0;
    font-weight: bold;
    border-radius: 0 5px 5px 0;
    color: #fff;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#cb85d4')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    background: #fff;
    text-decoration: none;
    display: block;
    display: flex;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
      transform: translateX(8px);
    }
    & + a {
      margin-top: 15px;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    div {
      margin: 0 18px;
      flex: 1;
      strong {
        color: #3a3a4d;
        font-size: 20px;
      }
      p {
        color: #a8a8b3;
        margin-top: 5px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

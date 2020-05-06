import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    transition: color 0.2s;
    &:hover {
      color: #666;
    }

    svg {
      margin-left: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }
  img {
    width: 120px;
    border-radius: 50%;
  }
  div {
    margin-left: 24px;
    strong {
      font-size: 36px;
      color: #3e3e4d;
    }
    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
  ul {
    margin-top: 10px;
    display: flex;
    list-style: none;
    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 70px;
  a {
    background: #fff;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }
    & + a {
      margin-top: 16px;
    }
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
      }
      svg {
        margin-left: auto;
        color: #cbcbd6;
      }
    }
  }
`;

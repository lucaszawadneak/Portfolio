import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const FadeInAnimation = keyframes`
  from { opacity: 0; transform: translateX(10%);}
  to { opacity: 1;transform: translateX(0%) }
`;

export const Container = styled.div`
  flex: 1;
  background-color: #112233;
  display: flex;
  overflow: hidden;
  align-items: center;
`;

export const ScreenHolder = styled.div`
  padding: 120px;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;

  animation: ${FadeInAnimation} 1000ms;

  @media screen and (max-width: 810px) {
    padding: 30px;
  }
`;

export const Intro = styled.div`
  margin: 180px 0px;
  h1 {
    font-size: 72px;
    font-weight: 900;
    font-style: italic;
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
  }

  p {
    color: #fff;
    opacity: 0.1;
    margin: 0;
  }
`;

export const BoxHolder = styled.div`
  margin: 200px 0px;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 21px;
  }
  p {
    color: #fff;
    font-size: 14px;
    text-align: justify;
    line-height: 20px;
  }

  span {
    color: #bc6b8a;
  }

  img {
    height: 300px;
    margin: 0px 10px;
  }

  .align {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 926px) {
    flex-direction: ${(props) => (!props.flip ? 'column-reverse' : 'column')};
  }
  @media screen and (max-width: 428px) {
    margin: 250px 0px;
    img {
      height: 150px;
    }
  }
`;

export const CourseWrapper = styled.div`
  margin: 200px 0px;
  align-self: stretch;
  h1 {
    color: #fff;
    font-size: 21px;
  }
  p {
    color: #fff;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
  }
  > div {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 1172px) {
    > div {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

export const CoursesHolder = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@800&display=swap');
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  div {
    background-color: #374c8d;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 30px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 500ms;
    height: 300px;
    width: 300px;
    @media screen and (max-width: 1172px) {
      margin: 10px;
    }

    &:hover {
      background-color: ${darken(0.1, '#374C8D')};
    }

    img {
      height: 200px;
      margin: 5px 0px;
    }

    #html {
      height: 120px;
    }
    @media screen and (max-width: 429px) {
      #html {
        height: 100px;
      }
    }
    h2 {
      font-family: 'Fira Sans', sans-serif;
      text-align: center;
      font-size: 32px;
      color: #fff;
      margin-top: 10px;
    }
    @media screen and (max-width: 428px) {
      height: 200px;
      width: 200px;
      img {
        height: 120px;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
`;

export const AbsoluteBox = styled.div`
  cursor: pointer;
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  background-color: #533c8d;
  padding: 10px 20px;
  width: 300px;
  bottom: -220px;
  position: absolute;
  transform: ${(props) =>
    props.hidden ? 'translateX(200%)' : 'translateX(0)'};
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  h1 {
    color: #fff;
  }
  ul {
    columns: 2;
  }
  li {
    color: #fff;
    font-size: 18px;
  }
`;
